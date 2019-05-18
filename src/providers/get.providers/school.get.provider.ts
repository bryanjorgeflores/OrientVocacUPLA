import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { School } from 'src/interfaces/models/school.model';

import { URL } from 'src/config/constants.config/http.constant.config';

@Injectable()

export class SchoolGetProvider {
  constructor(
    private http: HttpClient,

  ) { }

  getSchools(): Observable<Array<School>> {
    return this.http.get<Array<School>>(`${URL}/school`);
  }

}