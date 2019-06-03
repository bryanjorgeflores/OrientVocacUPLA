import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from 'src/interfaces/models/user.model';
import { URL } from 'src/config/constants.config/http.constant.config';
import { DataLogin } from 'src/interfaces/data-login.inteface';


@Injectable()

export class UserPostProvider {
  constructor(
    public http: HttpClient,

  ) { }

  postUserToRegister(user: User): Observable<any> {
    return this.http.post<any>(`${URL}/register`, user);
  }

  postDataForLogin(dataLogin: DataLogin): Observable<User> {
    return this.http.post<User>(`${URL}/login`, dataLogin);
  }

}
