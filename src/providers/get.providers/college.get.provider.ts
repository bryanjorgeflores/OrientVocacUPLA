import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { College } from 'src/interfaces/models/college.model';
import { Observable } from 'rxjs';
import { URL } from 'src/config/constants.config/http.constant.config';

@Injectable()

export class CollegeGetProvider {
  constructor(
    public http: HttpClient,

  ) { }

  getColleges(): Observable<Array<College>> {
    return this.http.get<Array<College>>(`${URL}/college`);
  }
}