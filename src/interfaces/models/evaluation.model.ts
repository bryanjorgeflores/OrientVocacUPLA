export interface Evaluation {
  _id?: string;
  tests: Array<string>;
  results: Array<{
    _id?: string;
    code: number;
    chord: boolean;
  }>;
  last: Array<number>;
  message: string;
}

