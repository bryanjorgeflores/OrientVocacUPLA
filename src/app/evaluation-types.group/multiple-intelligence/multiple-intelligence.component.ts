import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { UserTokenService } from 'src/services/user-token.service';
import { EvaluationValueService } from 'src/services/evaluation-value.service';

@Component({
  selector: 'app-multiple-intelligence',
  templateUrl: './multiple-intelligence.component.html',
  styleUrls: ['./multiple-intelligence.component.scss']
})
export class MultipleIntelligenceComponent implements OnInit, OnDestroy {
  @Input() indexQuestion = 0;
  answers: Array<string>;

  constructor(
    private userTokenService: UserTokenService,
    public evaluationValueService: EvaluationValueService,

  ) {
  }

  ngOnInit(): void {
    if (this.userTokenService.evaluation.last[1]) {
      this.indexQuestion = this.userTokenService.evaluation.last[1];
    }
    this.answers = this.userTokenService.evaluation.tests[1].split('');
  }

  questionResponse(option: string): void {
    if (this.indexQuestion >= 71) {
      this.answers[this.indexQuestion] = option;
      this.indexQuestion = 0;
      this.userTokenService.evaluation.last[1] = 71;
      return;
    }
    this.answers[this.indexQuestion] = option;
    this.indexQuestion++;
    if (this.userTokenService.evaluation.last[1] < 71) {
    this.userTokenService.evaluation.last[1]++;
    }
  }

  ngOnDestroy(): void {
    this.userTokenService.evaluation.tests[1] = this.answers.join('');
    console.log(this.userTokenService.evaluation.tests[1]);
  }
}
