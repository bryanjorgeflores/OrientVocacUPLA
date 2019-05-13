import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataLogin } from 'src/interfaces/data-login.inteface';
import { MessageStatus, StatusGeneral } from 'src/interfaces/input-status.interface';
import { UserPostProvider } from 'src/providers/post.providers/user.post.provider';
import { User } from 'src/interfaces/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  dataLogin: DataLogin = {
    id: '455454',
    password: '555'
  };

  labelIdLogin: MessageStatus = {
    message: 'Usuario', status: StatusGeneral.dark
  };
  labelPswLogin: MessageStatus = {
    message: 'Password', status: StatusGeneral.dark
  };
  
  constructor(
    private router: Router,
    private userPostProvider: UserPostProvider,

  ) { }

  ngOnInit() {

  }

  login() {

    if (this.dataLogin.id.length >= 8 && this.dataLogin.password.length >= 6) {
      this.userPostProvider.postDataForLogin(this.dataLogin)
        .subscribe(
          (userToken: User) => {
            localStorage.setItem('usertoken', JSON.stringify(userToken));
            localStorage.setItem('typeuser', userToken.type);

            document.getElementById('navbar').style.display = '';
            document.body.style.background = '#262626';

            if (userToken.type === 'student') {
              this.router.navigateByUrl('/evaluations');
            } else {
              this.router.navigateByUrl('/colleges');
            }
          }, 
          (err) => {
            return alert(err.error.test);
          }
        )
    } else {
      this.labelIdLogin = {
        message: 'Usuario ⚠️', status: StatusGeneral.warning
      }
      this.labelPswLogin = {
        message: 'Password ⚠️', status: StatusGeneral.warning
      }
    }

  }

}
