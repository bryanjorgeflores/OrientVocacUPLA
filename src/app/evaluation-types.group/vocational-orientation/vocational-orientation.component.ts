import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { UserTokenService } from 'src/services/user-token.service';
import { EvaluationValueService } from 'src/services/evaluation-value.service';

@Component({
  selector: 'app-vocational-orientation',
  templateUrl: './vocational-orientation.component.html',
  styleUrls: ['./vocational-orientation.component.scss']
})
export class VocationalOrientationComponent implements OnInit, OnDestroy {
  @Input() indexQuestion = 0;
  answer1: boolean;
  answer2: boolean;
  answer3: boolean;
  answers: Array<string>;
  resultCurrent = 0;

  constructor(
    private userTokenService: UserTokenService,
    public evaluationValueService: EvaluationValueService,

  ) {
    this.answer1 = false;
    this.answer2 = false;
    this.answer3 = false;
  }

  ngOnInit(): void {
    if (this.userTokenService.evaluation.last[2]) {
      this.indexQuestion = this.userTokenService.evaluation.last[2];
    }
    this.answers = this.userTokenService.evaluation.test[2].split('');
    console.log(this.answers);
    this.checkAnswerResult(+this.answers[this.indexQuestion]);
  }

  doAnswer1(): void {
    this.answer3 = false;
    if (this.answer1) {
      this.resultCurrent += 2;
      console.log(this.resultCurrent);
    } else {
      this.resultCurrent -= 2;
      console.log(this.resultCurrent);
    }
  }

  doAnswer2(): void {
    this.answer3 = false;
    if (this.answer2) {
      this.resultCurrent += 1;
      console.log(this.resultCurrent);
    } else {
      this.resultCurrent -= 1;
      console.log(this.resultCurrent);
    }
  }

  doAnswer3(): void {
    this.answer1 = false;
    this.answer2 = false;
    this.resultCurrent = 0;
  }

  checkAnswerResult(laterResult: number): void {
    if (isNaN(laterResult)) { laterResult = 0; }
    this.resultCurrent = laterResult;
    switch (laterResult) {
      case 3:
        this.answer1 = true; this.answer2 = true; this.answer3 = false;
        break;
      case 2:
        this.answer1 = true; this.answer2 = false; this.answer3 = false;
        break;
      case 1:
        this.answer1 = false; this.answer2 = true; this.answer3 = false;
        break;
      case 0:
        this.answer1 = false; this.answer2 = false; this.answer3 = false;
        break;
    }
  }

  answerQuestion(): void {
    if (this.indexQuestion >= this.evaluationValueService.evaluationSelected.length - 1) {
      this.answers[this.indexQuestion] = this.resultCurrent.toString();
      console.log(this.answers[107]);
      this.indexQuestion = 0;
      this.userTokenService.evaluation.last[2] = this.evaluationValueService.evaluationSelected.length - 1;
      this.checkAnswerResult(+this.answers[this.indexQuestion]);
      console.log(this.userTokenService.evaluation.last[2]);
      return;
    }
    console.log('before index', this.indexQuestion);
    this.answers[this.indexQuestion] = this.resultCurrent.toString();
    console.log('before answer', this.answers[this.indexQuestion]);
    this.indexQuestion++;
    console.log('after index', this.indexQuestion);
    console.log('after answer', this.answers[this.indexQuestion]);
    this.checkAnswerResult(+this.answers[this.indexQuestion]);

    if (this.userTokenService.evaluation.last[2] < this.evaluationValueService.evaluationSelected.length - 1) {
      this.userTokenService.evaluation.last[2]++;
    }
  }


  ngOnDestroy(): void {
    this.answers[this.indexQuestion] = this.resultCurrent.toString();
    this.userTokenService.evaluation.test[2] = this.answers.join('');
    console.log(this.userTokenService.evaluation.test[2]);
  }

}
