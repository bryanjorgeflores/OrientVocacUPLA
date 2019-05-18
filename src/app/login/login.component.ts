import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataLogin } from 'src/interfaces/data-login.inteface';
import { MessageStatus, StatusGeneral } from 'src/interfaces/input-status.interface';
import { UserPostProvider } from 'src/providers/post.providers/user.post.provider';
import { User } from 'src/interfaces/models/user.model';
import { setStyleDefault } from 'src/config/dom.config/navbar.dom.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  dataLogin: DataLogin;

  labelIdLogin: MessageStatus;
  labelPswLogin: MessageStatus;

  constructor(
    private router: Router,
    private userPostProvider: UserPostProvider,

  ) {
    this.dataLogin = {
      id: '',
      password: ''
    };

    this.labelIdLogin = {
      message: '', status: StatusGeneral.dark
    };
    this.labelPswLogin = {
      message: '', status: StatusGeneral.dark
    };

  }

  ngOnInit() {
  }

  login() {
    if (this.dataLogin.id.length < 8) {
      this.labelIdLogin = {
        message: '⚠️verificar', status: StatusGeneral.warning
      };

    } else if (this.dataLogin.password.length < 6) {
      this.labelPswLogin = {
        message: '⚠️verificar', status: StatusGeneral.warning
      };

    } else {
      this.userPostProvider.postDataForLogin(this.dataLogin)
        .subscribe(
          (userToken: User) => {
            console.log(userToken);
            localStorage.setItem('usertoken', JSON.stringify(userToken));
            localStorage.setItem('typeuser', userToken.type);

            setStyleDefault();

            if (userToken.type === 'student') {
              this.router.navigateByUrl('/evaluations');

            } else if (userToken.type === 'administrator') {
              this.router.navigateByUrl('/schools');
            }
          },
          (err) => {
            this.labelIdLogin = {
              message: '', status: StatusGeneral.dark
            };
            this.labelPswLogin = {
              message: '️', status: StatusGeneral.dark
            };
            return alert(err.error.text);
          }
        );
    }

  }

}
