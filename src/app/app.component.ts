import { Component, OnInit } from '@angular/core';

import { User } from 'src/interfaces/models/user.model';
import { Evaluation } from 'src/interfaces/models/evaluation.model';

import { UserTokenService } from 'src/services/user-token.service';
import { EvaluationValueService } from 'src/services/evaluation-value.service';
import { multipleIntelligenceQuestions } from 'src/config/constants.config/evaluation-types/multiple-intelligence.';
import { vocationalOrientationQuestions } from 'src/config/constants.config/evaluation-types/vocational-orientation.constant';
import { characterologicalQuestions } from 'src/config/constants.config/evaluation-types/characterological';
import { EvaluationType } from 'src/interfaces/type-evaluations.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit {
  typeUser: string;
  user: User;
  evaluation: Evaluation;

  constructor(
    private userTokenService: UserTokenService,
    private evaluationValueService: EvaluationValueService,

  ) {

  }

  ngOnInit(): void {
    this.typeUser = localStorage.getItem('typeuser');
    this.user = JSON.parse(localStorage.getItem('usertoken'));
    this.evaluation = JSON.parse(localStorage.getItem('evaluationtoken'));

    this.userTokenService.setUserDataToken(
      this.typeUser,
      this.user,
      this.evaluation
    );
    console.log('this.typeUser', this.userTokenService.typeUser);
    console.log('this.user', this.userTokenService.user);
    console.log('this.evaluation', this.userTokenService.evaluation);

    switch (localStorage.getItem('evaluationtype')) {
      case EvaluationType.intelligence:
        this.evaluationValueService.evaluationSelected = multipleIntelligenceQuestions;
        break;
      case EvaluationType.vocational:
        this.evaluationValueService.evaluationSelected = vocationalOrientationQuestions;
        break;
      case EvaluationType.charactelogical:
        this.evaluationValueService.evaluationSelected = characterologicalQuestions;
        break;
      default:
        this.evaluationValueService.evaluationSelected = [];
        break;
    }
  }

}

