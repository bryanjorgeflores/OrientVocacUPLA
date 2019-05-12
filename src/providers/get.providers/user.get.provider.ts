import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from 'src/interfaces/models/user.model';

import { URL } from 'src/config/constants.config/http.constant.config'

@Injectable()

export class UserGetProvider {
  constructor(
    private http: HttpClient,

  ) { }

  getStudentsByCollege(idCollege: string): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${URL}/college/students/${idCollege}`);
  }
}