import { Injectable } from '@angular/core';
import { CharacterologicalQuestion, VocationalOrientationQuestion } from 'src/interfaces/type-evaluations.interface';
import { Evaluation } from 'src/interfaces/models/evaluation.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationValueService {
  public typeEvaluation: string;
  public numberIndexQuestionsSelected: number;
  public lastIndexQuestionVocationalOrientation = 0;
  public lastIndexQuestionMultipleIntelligence = 0;
  public lastIndexQuestionCharacterological = 0;
  public evaluationSelected: Array<CharacterologicalQuestion | string | VocationalOrientationQuestion>;

  public evaluationInit: Evaluation = {
    test: ['', '', ''],
    results: [
      { code: 0, chord: false },
      { code: 1, chord: false },
      { code: 2, chord: false },

    ],
    last: [0, 0, 0],
    message: ''
  };

  constructor(

  ) { }


}
