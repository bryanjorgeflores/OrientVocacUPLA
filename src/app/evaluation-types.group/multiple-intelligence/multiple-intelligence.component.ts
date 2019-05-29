import { Component, OnInit, OnDestroy } from '@angular/core';
import { multipleIntelligenceQuestions } from 'src/services/evaluation-types.service/multiple-intelligence.service';


@Component({
  selector: 'app-multiple-intelligence',
  templateUrl: './multiple-intelligence.component.html',
  styleUrls: ['./multiple-intelligence.component.scss']
})
export class MultipleIntelligenceComponent implements OnInit, OnDestroy {
  questions: Array<string> = [];
  indexQuestion = 0;

  constructor(

  ) {
  }

  ngOnInit(): void {
    console.log('MultipleIntelligece Component Init');
    this.questions = multipleIntelligenceQuestions;
  }

  ngOnDestroy(): void {
    console.log('MultipleIntelligence Component Destroyed');
  }

  questionResponse(): void {
    if (this.indexQuestion === this.questions.length - 1) {
      this.indexQuestion = 0;
      return;
    }
    this.indexQuestion++;
  }
}
