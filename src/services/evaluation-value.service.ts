import { Injectable } from '@angular/core';
import { CharacterologicalQuestion, VocationalOrientationQuestion } from 'src/interfaces/type-evaluations.interface';

@Injectable({
  providedIn: 'root'
})
export class EvaluationValueService {
  public typeEvaluation: string;
  public numberIndexQuestionsSelected: number;
  public lastIndexQuestionVocationalOrientation = 0;
  public lastIndexQuestionMultipleIntelligence = 0;
  public lastIndexQuestionCharacterological = 0;
  public evaluationTypeSelected: Array<CharacterologicalQuestion | string | VocationalOrientationQuestion>;

  constructor(

  ) { }


}
