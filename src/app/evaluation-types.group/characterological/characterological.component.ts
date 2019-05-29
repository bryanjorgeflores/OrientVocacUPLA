import { Component, OnInit, OnDestroy } from '@angular/core';
import { characterologicalQuestions } from 'src/services/evaluation-types.service/characterological.service';

@Component({
  selector: 'app-characterological',
  templateUrl: './characterological.component.html',
  styleUrls: ['./characterological.component.scss']
})
export class CharacterologicalComponent implements OnInit, OnDestroy {
  questions: Array<{ answer1: string, answer2: string, answer3?: string }> = [];
  indexQuestion: number;

  constructor(

  ) {
  this.indexQuestion = 0;
  }

  ngOnInit(): void {
    console.log('Characterologicas Component Init');
    this.questions = characterologicalQuestions;
  }

  ngOnDestroy(): void {
    console.log('Characterological Component Destroyed');
  }

  questionResponse(): void {
    if (this.indexQuestion === this.questions.length - 1) {
      this.indexQuestion = 0;
      return;
    }
    this.indexQuestion++;

  }

}
