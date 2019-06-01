import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserTokenService } from 'src/services/user-token.service';
import { multipleIntelligenceQuestions } from 'src/config/constants.config/evaluation-types/multiple-intelligence.';
import { EvaluationValueService } from 'src/services/evaluation-value.service';

@Component({
  selector: 'app-multiple-intelligence',
  templateUrl: './multiple-intelligence.component.html',
  styleUrls: ['./multiple-intelligence.component.scss']
})
export class MultipleIntelligenceComponent implements OnInit, OnDestroy {
  indexQuestion = 0;

  constructor(
    private userTokenService: UserTokenService,
    public evaluationValueService: EvaluationValueService,

  ) {
  }

  ngOnInit(): void {
    if (this.userTokenService.evaluation.last[1]) {
      this.indexQuestion = this.userTokenService.evaluation.last[1];
    }
  }

  ngOnDestroy(): void {
    console.log('MultipleIntelligence Component Destroyed');
  }

  questionResponse(): void {
    if (this.indexQuestion >= this.evaluationValueService.evaluationSelected.length - 1) {
      this.indexQuestion = 0;
      this.userTokenService.evaluation.last[1] = this.evaluationValueService.evaluationSelected.length - 1;
      return;
    }
    this.indexQuestion++;
    if (this.userTokenService.evaluation.last[1] < this.evaluationValueService.evaluationSelected.length - 1) {
    this.userTokenService.evaluation.last[1]++;
    }
  }
}
