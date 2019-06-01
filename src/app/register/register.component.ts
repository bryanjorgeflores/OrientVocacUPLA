import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserPostProvider } from 'src/providers/post.providers/user.post.provider';
import { SchoolGetProvider } from 'src/providers/get.providers/school.get.provider';

import { User } from 'src/interfaces/models/user.model';
import { School } from 'src/interfaces/models/school.model';
import { entryPasswordRequirements } from 'src/config/constants.config/register.constant.config';
import { UserGlobalConfig } from 'src/config/globals.config/user.global.config';
import { ComponentConfig } from 'src/config/globals.config/render-component.global.config';
import { EvaluationValueService } from 'src/services/evaluation-value.service';
import { UserTokenService } from 'src/services/user-token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User;

  schools: Array<School>;
  schoolIndexSelected: number;
  schoolCodeSelected: string;
  schoolCodeInput: string;

  degrees: Array<string>;

  careers: Array<string>;

  passwordRequirements: Array<any>;
  repeatedPassword: string;
  passwordBlock: boolean;

  constructor(
    private userPostProvider: UserPostProvider,
    private schoolGetProvider: SchoolGetProvider,
    private router: Router,
    private userGlobalConfig: UserGlobalConfig,
    private componentConfig: ComponentConfig,
    private evaluationValueService: EvaluationValueService,
    private userTokenService: UserTokenService,

  ) {

    this.user = {
      username: '',
      password: '',
      name: '',
      school: '',
      degree: '',
      gender: '',
      career: '',

    };

    this.schoolIndexSelected = 0;
    this.schoolCodeSelected = '';
    this.schoolCodeInput = '';
    this.degrees = ['Tercer Grado', 'Cuarto Grado', 'Quinto Grado'];
    this.careers = [
      'Ingenieria',
      'Medicina',
      'Arquitecura',
      'Contabilidad',
      'Docencia',

    ];
    this.repeatedPassword = '';
    this.passwordBlock = true;
  }


  ngOnInit(): void {
    this.schoolGetProvider.getSchools()
      .subscribe(
        (schools: Array<School>) => {
          schools.sort();
          this.schools = schools;
        },
        (err) => alert(err.error.text)
      );

    this.passwordRequirements = entryPasswordRequirements(this.user.password, this.repeatedPassword);
  }

  checkPassword(): void {
    this.passwordRequirements = entryPasswordRequirements(this.user.password, this.repeatedPassword);
  }

  registerUser(): void {
    this.schoolCodeSelected = this.schools[this.schoolIndexSelected].code;

    if (this.schoolCodeSelected !== this.schoolCodeInput) {
      alert('El Código del Colegio es Incorrecto!!');
      return;
    }

    this.user.school = this.schools[this.schoolIndexSelected]._id;

    const checkPasswordRequirements: any = this.passwordRequirements.find(
      (passwordRequirement: any) => passwordRequirement.condition === false);

    if (checkPasswordRequirements === undefined && this.user.username.length >= 8) {
      this.userPostProvider.postUserToRegister(this.user)
        .subscribe(
          (user: User) => {
            localStorage.setItem('usertoken', JSON.stringify(user));
            localStorage.setItem('typeuser', user.type);
            localStorage.setItem('evaluationtoken', JSON.stringify(this.evaluationValueService.evaluationInit));
            this.userTokenService.evaluation = this.evaluationValueService.evaluationInit;

            this.componentConfig.renderNavbar = true;
            this.userGlobalConfig.typeUser = user.type;

            this.router.navigateByUrl('/evaluations');
          },
          (err) => alert(err.error.text)
        );
    } else {
      return alert('Verificar Usuario o Contraseña');
    }
  }

}
