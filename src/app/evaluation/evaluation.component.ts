import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvaluationValueService } from 'src/services/evaluation-value.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  quantityQuestions: number;
  evaluationType: string;

  constructor(
    private router: Router,
    public evaluationValueService: EvaluationValueService,

  ) { }

  ngOnInit() {
    if (localStorage.getItem('usertoken') === null) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.quantityQuestions = +localStorage.getItem('quantityquestions');
    this.evaluationType = localStorage.getItem('evaluationtype');
    console.log(this.evaluationType);
  }


}
