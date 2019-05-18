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

  getStudentsBySchool(idSchool: string): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${URL}/school/students/${idSchool}`);
  }

  getStudents(inputSeachStudent: string): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${URL}/users/${inputSeachStudent}`);
  }
}