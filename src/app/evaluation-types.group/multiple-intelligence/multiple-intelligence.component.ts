import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { EvaluationValueService } from 'src/services/evaluation-value.service';

@Component({
  selector: 'app-multiple-intelligence',
  templateUrl: './multiple-intelligence.component.html',
  styleUrls: ['./multiple-intelligence.component.scss']
})
export class MultipleIntelligenceComponent implements OnInit, OnDestroy {
  @Input() questions: Array<string> = [];
  indexQuestion = 0;

  constructor(
    private evaluationValueService: EvaluationValueService,

  ) {
  }

  ngOnInit(): void {
    console.log('MultipleIntelligece Component Init');
  }

  ngOnDestroy(): void {
    console.log('MultipleIntelligence Component Destroyed');
  }

  questionResponse(): void {
    if (this.indexQuestion >= this.questions.length - 1) {
      this.indexQuestion = 0;
      this.evaluationValueService.lastIndexQuestionMultipleIntelligence = this.questions.length - 1;
      return;
    }
    this.indexQuestion++;
    this.evaluationValueService.lastIndexQuestionMultipleIntelligence++;
  }
}
