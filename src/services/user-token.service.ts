import { Injectable } from '@angular/core';
import { User } from 'src/interfaces/models/user.model';
import { Evaluation } from 'src/interfaces/models/evaluation.model';

@Injectable({
  providedIn: 'root'
})
export class UserTokenService {
  public typeUser: string;
  public user: User;
  public evaluation: Evaluation;

  constructor() {
  }

  setUserDataToken(typeUser: string, user: User, evaluation: Evaluation) {
    this.typeUser = typeUser;
    this.user = user;
    this.evaluation = evaluation;
  }
}
