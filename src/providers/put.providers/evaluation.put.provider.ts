import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evaluation } from 'src/interfaces/models/evaluation.model';
import { Observable } from 'rxjs';
import { URL } from '../../config/constants.config/http.constant.config';

@Injectable({
  providedIn: 'root'
})

export class EvaluationPutProvider {
  constructor(
    private http: HttpClient,

  ) { }

  putTypeEvaluation(evaluation: Evaluation): Observable<any> {
    return this.http.put<any>(`${URL}/student/evaluation`, evaluation);
  }
}
