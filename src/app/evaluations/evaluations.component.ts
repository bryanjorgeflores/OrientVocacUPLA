import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { Evaluation } from 'src/interfaces/evaluation';
import { EvaluationType } from 'src/interfaces/type-evaluations.interface';

import { EvaluationService } from 'src/services/evaluation.service';
import { EvaluationValueService } from 'src/services/evaluation-value.service';

import {
  multipleIntelligenceQuestions,
  quantityMultipleIntelligenceQuestions
} from 'src/config/constants.config/evaluation-types/multiple-intelligence.';
import {
  vocationalOrientationQuestions,
  quantityVocationalOrientationQuestions
} from 'src/config/constants.config/evaluation-types/vocational-orientation.constant';
import {
  characterologicalQuestions,
  quantityCharacterologicalQuestions
} from 'src/config/constants.config/evaluation-types/characterological';

import { animateProgressBar } from 'src/config/dom.config/evaluations.dom.config';
import { setStyleBody } from 'src/config/dom.config/navbar.dom.config';


@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.scss']
})
export class EvaluationsComponent implements OnInit, AfterViewInit {
  evaluations: Array<Evaluation>;
  evaluationsPercentages: [number, number, number];

  constructor(
    private router: Router,
    public evaluationService: EvaluationService,
    public evaluationValueService: EvaluationValueService

  ) {

  }

  ngOnInit() {
    if (localStorage.getItem('usertoken') === null) {
      this.router.navigateByUrl('/login');
      return;
    }

    setStyleBody('#262626');

    this.evaluations = this.evaluationService.evaluations;

    this.evaluationsPercentages = [
      this.evaluationValueService.lastIndexQuestionVocationalOrientation / quantityVocationalOrientationQuestions,
      this.evaluationValueService.lastIndexQuestionMultipleIntelligence / quantityMultipleIntelligenceQuestions,
      this.evaluationValueService.lastIndexQuestionCharacterological / quantityCharacterologicalQuestions,
    ];
  }


  ngAfterViewInit(): void {
    for (let i = 0; i < this.evaluations.length; i++) {
      let valueProgressRight = this.evaluationsPercentages[i] * 100;
      let valueProgressLeft = 0;

      if (valueProgressRight > 50) {
        valueProgressLeft = valueProgressRight - 50;
        valueProgressRight = 50;
      }

      if (valueProgressRight >= 100) {
        valueProgressLeft = 50;
        valueProgressRight = 50;
      }

      const selectProgressBarLeft = document.getElementById(`progress-bar-left-${i}`);
      const selectProgressBarRight = document.getElementById(`progress-bar-right-${i}`);

      animateProgressBar(selectProgressBarLeft, valueProgressLeft, 1000);
      animateProgressBar(selectProgressBarRight, valueProgressRight, 0);
    }

  }

  goToEvaluation(evaluation: Evaluation) {
    localStorage.setItem('evaluationtype', evaluation.type);
    console.log(evaluation.type);

    localStorage.setItem('quantityquestions', evaluation.quantity.toString());

    switch (evaluation.type) {
      case EvaluationType.intelligence:
        this.evaluationValueService.evaluationTypeSelected = multipleIntelligenceQuestions;
        break;
      case EvaluationType.vocational:
        this.evaluationValueService.evaluationTypeSelected = vocationalOrientationQuestions;
        break;
      case EvaluationType.charactelogical:
        this.evaluationValueService.evaluationTypeSelected = characterologicalQuestions;
        break;
    }

    this.router.navigateByUrl('/evaluation');
  }
}
