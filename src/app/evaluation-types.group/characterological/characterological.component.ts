import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CharacterologicalQuestion } from 'src/interfaces/type-evaluations.interface';
import { EvaluationValueService } from 'src/services/evaluation-value.service';

@Component({
  selector: 'app-characterological',
  templateUrl: './characterological.component.html',
  styleUrls: ['./characterological.component.scss']
})
export class CharacterologicalComponent implements OnInit, OnDestroy {
  @Input() questions: Array<CharacterologicalQuestion> = [];
  indexQuestion: number;

  constructor(
    private evaluationValueService: EvaluationValueService,

  ) {
  this.indexQuestion = 0;
  }

  ngOnInit(): void {
    console.log('Characterologicas Component Init');
  }

  ngOnDestroy(): void {
    console.log('Characterological Component Destroyed');
  }

  questionResponse(): void {
    if (this.indexQuestion >= this.questions.length - 1) {
      this.indexQuestion = 0;
      this.evaluationValueService.lastIndexQuestionCharacterological = this.questions.length - 1;
      return;
    }
    this.indexQuestion++;
    this.evaluationValueService.lastIndexQuestionCharacterological++;
  }

}
