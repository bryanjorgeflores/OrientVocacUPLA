import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { VocationalOrientationQuestion } from 'src/interfaces/type-evaluations.interface';
import { EvaluationValueService } from 'src/services/evaluation-value.service';

@Component({
  selector: 'app-vocational-orientation',
  templateUrl: './vocational-orientation.component.html',
  styleUrls: ['./vocational-orientation.component.scss']
})
export class VocationalOrientationComponent implements OnInit, OnDestroy {
  @Input() questions: Array<VocationalOrientationQuestion> = [];
  indexQuestion = 0;
  indeterminate: boolean;
  checked: boolean;
  disabled: boolean;
  labelPosition: string;

  constructor(
    private evaluationValueService: EvaluationValueService,

  ) {
    this.checked = false;
    this.indeterminate = false;
    this.labelPosition = 'after';
    this.disabled = false;
  }

  ngOnInit(): void {
    console.log('Vocational Component Init');
  }

  answerQuestion(): void {
    if (this.indexQuestion >= this.questions.length - 1) {
      this.indexQuestion = 0;
      this.evaluationValueService.lastIndexQuestionVocationalOrientation = this.questions.length - 1;
      return;
    }

    this.indexQuestion++;
    this.evaluationValueService.lastIndexQuestionVocationalOrientation++;

  }


  ngOnDestroy(): void {
    console.log('Vocational Compoment Destroy');
  }

}
