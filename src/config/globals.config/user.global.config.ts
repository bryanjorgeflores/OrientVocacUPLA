import { Injectable } from "@angular/core";
import { User } from 'src/interfaces/models/user.model';

@Injectable()

export class UserGlobalConfig {
  public studentsBySchool: Array<User>;

}