import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserPostProvider } from 'src/providers/post.providers/user.post.provider';
import { CollegeGetProvider } from 'src/providers/get.providers/college.get.provider';

import { User } from 'src/interfaces/models/user.model';
import { College } from 'src/interfaces/models/college.model';
import { entryPasswordRequirements } from 'src/config/constants.config/register.constant.config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = {
    username: '',
    password: '',
    name: '',
    college: '',
    degree: '',
    gender: '',
    career: '',

  };

  passwordRequirements: Array<any>;
  repeatedPassword: string = '';
  passwordBlock: boolean = true;

  colleges: Array<College>;

  degrees: Array<string> = ['Tercer Grado', 'Cuarto Grado', 'Quinto Grado'];

  careers: Array<string> = [
    'Ingenieria',
    'Medicina',
    'Arquitecura',
    'Contabilidad',
    'Docencia'
  ];




  constructor(
    private userPostProvider: UserPostProvider,
    private collegeGetProvider: CollegeGetProvider,
    private router: Router,

  ) { }

  ngOnInit() {
    this.collegeGetProvider.getColleges()
      .subscribe(
        (colleges: Array<College>) => {
          colleges.sort();
          this.colleges = colleges;
        },
        (err) => alert(err.error.text)
      );

    this.passwordRequirements = entryPasswordRequirements(this.user.password, this.repeatedPassword);
  }


  checkPassword(): void {
    this.passwordRequirements = entryPasswordRequirements(this.user.password, this.repeatedPassword);
  }

  registerUser(): void {

    let checkPasswordRequirements: any = this.passwordRequirements.find(
      (passwordRequirement: any) => passwordRequirement.condition === false);
    
    if (checkPasswordRequirements === undefined) {
      this.userPostProvider.postUserToRegister(this.user)
        .subscribe(
          (user: User) => {
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigateByUrl('/encuestas')
          },
          (err) => alert(err.error.text)
        );
    } else {
      return alert('Verificar Contraseña');
    }
  }

}
