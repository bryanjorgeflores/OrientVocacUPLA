import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { EvaluationChart } from 'src/interfaces/evaluation-chart';
import { EvaluationType } from 'src/interfaces/type-evaluations.interface';

import { EvaluationService } from 'src/services/evaluation.service';

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
import { UserTokenService } from 'src/services/user-token.service';
import { EvaluationValueService } from 'src/services/evaluation-value.service';


@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.scss']
})
export class EvaluationsComponent implements OnInit, AfterViewInit {
  evaluations: Array<EvaluationChart>;
  evaluationsPercentages: [number, number, number];

  constructor(
    private router: Router,
    public userTokenService: UserTokenService,
    public evaluationService: EvaluationService,
    private evaluationValueService: EvaluationValueService,

  ) {

  }

  ngOnInit() {
    if (localStorage.getItem('usertoken') === null) {
      this.router.navigateByUrl('/login');
      return;
    }

    setStyleBody('#262626');

    this.evaluations = this.evaluationService.evaluations || [];

    this.evaluationsPercentages = [
      this.userTokenService.evaluation.last[2] / (quantityVocationalOrientationQuestions - 1),
      this.userTokenService.evaluation.last[1] / (quantityMultipleIntelligenceQuestions - 1),
      this.userTokenService.evaluation.last[0] / (quantityCharacterologicalQuestions - 1),
    ];

    console.log(this.userTokenService.evaluation.last[0]);
    console.log(this.userTokenService.evaluation.last[1]);
    console.log(this.userTokenService.evaluation.last[2]);
  }


  ngAfterViewInit(): void {
    if (!this.evaluations) {
      return;
    }

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

  goToEvaluation(evaluation: EvaluationChart) {
    localStorage.setItem('evaluationtype', evaluation.type);

    switch (evaluation.type) {
      case EvaluationType.intelligence:
        this.evaluationValueService.evaluationSelected = multipleIntelligenceQuestions;
        break;
      case EvaluationType.vocational:
        this.evaluationValueService.evaluationSelected = vocationalOrientationQuestions;
        break;
      case EvaluationType.charactelogical:
        this.evaluationValueService.evaluationSelected = characterologicalQuestions;
        break;
    }

    this.router.navigateByUrl('/evaluation');
  }
}
