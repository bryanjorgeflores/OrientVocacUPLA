import { Evaluation } from './evaluation.model';

export interface User {
  _id?: string;
  username: string;
  password: string;
  name: string;
  type?: string;
  school: string;
  degree: string;
  gender: string;
  career: string;
  evaluation?: Evaluation;
}

