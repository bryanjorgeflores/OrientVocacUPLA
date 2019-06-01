import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserTokenService } from 'src/services/user-token.service';
import { characterologicalQuestions } from 'src/config/constants.config/evaluation-types/characterological';
import { EvaluationValueService } from 'src/services/evaluation-value.service';

@Component({
  selector: 'app-characterological',
  templateUrl: './characterological.component.html',
  styleUrls: ['./characterological.component.scss']
})
export class CharacterologicalComponent implements OnInit, OnDestroy {
  indexQuestion: number;

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
  }

  ngOnDestroy(): void {
    console.log('Characterological Component Destroyed');
  }

  questionResponse(): void {
    if (this.indexQuestion >= this.evaluationValueService.evaluationSelected.length - 1) {
      this.indexQuestion = 0;
      return;
    }
    this.indexQuestion++;

    if (this.userTokenService.evaluation.last[0] < this.evaluationValueService.evaluationSelected.length - 1) {
      this.userTokenService.evaluation.last[0]++;
    }
    console.log(this.userTokenService.evaluation.last[0]);
  }

}
