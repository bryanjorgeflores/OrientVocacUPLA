import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataLogin } from 'src/interfaces/data-login.inteface';
import { MessageStatus, StatusGeneral } from 'src/interfaces/input-status.interface';
import { UserPostProvider } from 'src/providers/post.providers/user.post.provider';
import { User } from 'src/interfaces/models/user.model';
import { UserGlobalConfig } from 'src/config/globals.config/user.global.config';
import { ComponentConfig } from 'src/config/globals.config/render-component.global.config';
import { setStyleBody } from 'src/config/dom.config/navbar.dom.config';

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
    private userGlobalConfig: UserGlobalConfig,
    private componentConfig: ComponentConfig,

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

  ngOnInit(): void {
    setStyleBody('rgb(111, 98, 227)');

    this.componentConfig.renderNavbar = false;
  }


  login() {
    const conditionId = this.dataLogin.id.length >= 8;
    const conditionPassword = this.dataLogin.password.length >= 6;

    this.labelIdLogin.message = '';
    this.labelPswLogin.message = '';

    if (!conditionId) {
      this.labelIdLogin = {
        message: '⚠️verificar', status: StatusGeneral.warning
      };

    }

    if (!conditionPassword) {
      this.labelPswLogin = {
        message: '⚠️verificar', status: StatusGeneral.warning
      };
    }

    if (conditionId && conditionPassword) {
      this.userPostProvider.postDataForLogin(this.dataLogin)
        .subscribe(
          (userToken: User) => {
            console.log(userToken);
            localStorage.setItem('usertoken', JSON.stringify(userToken));

            localStorage.setItem('typeuser', userToken.type);
            this.userGlobalConfig.typeUser = userToken.type;

            this.userGlobalConfig.typeUser = userToken.type;
            this.componentConfig.renderNavbar = true;

            if (userToken.type === 'student') {
              this.router.navigateByUrl('/evaluations');

            } else if (userToken.type === 'administrator') {
              this.router.navigateByUrl('/schools');
            }
          },
          (err) => {
            this.labelIdLogin = {
              message: '⚠️verificar', status: StatusGeneral.secondary
            };

            this.labelPswLogin = {
              message: '⚠️verificar', status: StatusGeneral.secondary
            };

            return alert(err.error.text);
          }
        );
    }

  }

}
