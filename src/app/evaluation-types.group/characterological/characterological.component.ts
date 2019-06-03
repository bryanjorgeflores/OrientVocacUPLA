import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { UserTokenService } from 'src/services/user-token.service';
import { EvaluationValueService } from 'src/services/evaluation-value.service';

@Component({
  selector: 'app-characterological',
  templateUrl: './characterological.component.html',
  styleUrls: ['./characterological.component.scss']
})
export class CharacterologicalComponent implements OnInit, OnDestroy {
  @Input() indexQuestion: number;
  answers: Array<string>;

  constructor(
    private userTokenService: UserTokenService,
    public evaluationValueService: EvaluationValueService,

  ) {
  this.indexQuestion = 0;
  }

  ngOnInit(): void {
    if (this.userTokenService.evaluation.last[0]) {
      this.indexQuestion = this.userTokenService.evaluation.last[0];
    }
    this.answers = this.userTokenService.evaluation.tests[0].split('');
  }

  questionResponse(option: string): void {
    if (this.indexQuestion >= 29) {
      this.answers[this.indexQuestion] = option;
      this.indexQuestion = 0;
      this.userTokenService.evaluation.last[0] = 29;
      return;
    }
    this.answers[this.indexQuestion] = option;
    this.indexQuestion++;

    if (this.userTokenService.evaluation.last[0] < 29) {
      this.userTokenService.evaluation.last[0]++;
    }
  }

  ngOnDestroy(): void {
    this.userTokenService.evaluation.tests[0] = this.answers.join('');
    console.log(this.userTokenService.evaluation.tests[0]);
  }

}
