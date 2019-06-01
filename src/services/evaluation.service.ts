import { Injectable } from '@angular/core';
import { EvaluationValueService } from './evaluation-value.service';
import { quantityVocationalOrientationQuestions } from 'src/config/constants.config/evaluation-types/vocational-orientation.constant';
import { quantityMultipleIntelligenceQuestions } from 'src/config/constants.config/evaluation-types/multiple-intelligence.';
import { quantityCharacterologicalQuestions } from 'src/config/constants.config/evaluation-types/characterological';
import { EvaluationChart } from 'src/interfaces/evaluation-chart';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  evaluations: Array<EvaluationChart> = [
    {
      type: 'vocationalOrientation',
      name: 'Orientacion Vocacional',
      detail: 'Identifica tus Intereses Profesionales',
      src: 'assets/login.jpg',
      quantity: quantityVocationalOrientationQuestions,
      percentage: (this.evaluationValue.lastIndexQuestionVocationalOrientation / quantityVocationalOrientationQuestions) * 100,
      color: 'yellow',
    },
    {
      type: 'multipleIntelligence',
      name: 'Inteligencias Multiples',
      detail: 'Identifica tus Habilidades',
      src: 'assets/login2.jpg',
      quantity: quantityMultipleIntelligenceQuestions,
      percentage: (this.evaluationValue.lastIndexQuestionMultipleIntelligence / quantityMultipleIntelligenceQuestions) * 100,
      color: 'blue',
    },
    {
      type: 'characterological',
      name: 'Caracterológico',
      detail: 'Identifica tu Personalidad',
      src: 'assets/login.jpeg',
      quantity: quantityCharacterologicalQuestions,
      percentage: (this.evaluationValue.lastIndexQuestionCharacterological / quantityCharacterologicalQuestions),
      color: 'black',
    }
  ];

  constructor(
    private evaluationValue: EvaluationValueService,

  ) { }
}
