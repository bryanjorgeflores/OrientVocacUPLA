import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Encuesta } from 'src/interfaces/encuestas';
import { animateProgressBar } from 'src/config/dom.config/evaluations.dom.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.scss']
})
export class EvaluationsComponent implements OnInit, AfterViewInit {
  tests: Array<Encuesta>;

  constructor(
    private router: Router,

  ) {

  }

  ngOnInit() {
    if (localStorage.getItem('usertoken') === null) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.tests = [
      {
        nombre: 'Encuesta 1',
        detalle: 'Informacion de la encuesta 1',
        src: '../../assets/login.jpg',
        porcentaje: 50,
        color: 'yellow',
      },
      {
        nombre: 'Encuesta 2',
        detalle: 'Informacion de la encuesta 2',
        src: '../../assets/login2.jpg',
        porcentaje: 60,
        color: 'blue',
      },
      {
        nombre: 'Encuesta 3',
        detalle: 'Informacion de la encuesta 3',
        src: '../../assets/login.jpeg',
        porcentaje: 80,
        color: 'black',
      }
    ];
  }


  ngAfterViewInit(): void {
    for (let i = 0; i < this.tests.length; i++) {
      let valueProgressRight = this.tests[i].porcentaje;
      let valueProgressLeft = 0;

      if (valueProgressRight > 50) {
        valueProgressLeft = valueProgressRight - 50;
        valueProgressRight = 50;
      }

      const selectProgressBarLeft = document.getElementById(`progress-bar-left-${i}`);
      const selectProgressBarRight = document.getElementById(`progress-bar-right-${i}`);

      animateProgressBar(selectProgressBarLeft, valueProgressLeft, 1000);
      animateProgressBar(selectProgressBarRight, valueProgressRight, 0);
    }

  }


}
