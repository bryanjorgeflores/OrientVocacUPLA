import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserPostProvider } from 'src/providers/user-post.provider';
import { User } from 'src/interfaces/models/user.model';
import { College } from 'src/interfaces/models/college.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = {
    username: 'hola',
    password: '',
    name: '',
    college: '',
    degree: '',
    gender: '',
    career: '',

  };

  colleges: Array<College> = [
    { name: 'Colegio 1', code: 'col', location: 'direccion de colegio1', acronym: 'col', total: 0 },
    { name: 'Colegio 2', code: 'col', location: 'direccion de colegio2', acronym: 'col', total: 0 },
    { name: 'Colegio 3', code: 'col', location: 'direccion de colegio3', acronym: 'col', total: 0 },
    { name: 'Colegio 4', code: 'col', location: 'direccion de colegio4', acronym: 'col', total: 0 },

  ];

  degrees: Array<string> = ['Tercer Grado', 'Cuarto Grado', 'Quinto Grado'];

  careers: Array<string> = [
    'Ingenieria',
    'Medicina',
    'Arquitecura',
    'Contabilidad',
    'Docencia'
  ];



  constructor(
    public userPostProvider: UserPostProvider,
    private router: Router,

  ) { }

  ngOnInit() {
  }

  registerUser(): void {
    console.log(this.user);
    this.userPostProvider.postUserToRegister(this.user)
      .subscribe(
        (user: User) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigateByUrl('/encuestas')
        },
        (err) => alert(err.error.text)
      );
  }

}
