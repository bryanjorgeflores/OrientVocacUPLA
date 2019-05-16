import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/interfaces/encuestas';
import { animateProgressBar } from 'src/config/styles.config/evaluations.style.config';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.scss']
})
export class EvaluationsComponent implements OnInit {
  tests: Array<Encuesta>;

  constructor() {
    let encuesta1: Encuesta = {
      nombre: 'Encuesta 1',
      detalle: 'Informacion de la encuesta 1',
      src: '../../assets/login.jpg',
      porcentaje: 50,
      color: 'yellow',
    };
    let encuesta2: Encuesta = {
      nombre: 'Encuesta 2',
      detalle: 'Informacion de la encuesta 2',
      src: '../../assets/login2.jpg',
      porcentaje: 60,
      color: 'blue',
    };
    let encuesta3: Encuesta = {
      nombre: 'Encuesta 3',
      detalle: 'Informacion de la encuesta 3',
      src: '../../assets/login.jpeg',
      porcentaje: 80,
      color: 'black',
    }
    this.tests = [encuesta1, encuesta2, encuesta3];
  }

  ngOnInit() {

  }


  ngAfterViewInit() {
    for (let i = 0; i < this.tests.length; i++) {
      let valueProgressRight = this.tests[i].porcentaje;
      let valueProgressLeft = 0;

      if (valueProgressRight > 50) {
        valueProgressLeft = valueProgressRight - 50;
        valueProgressRight = 50;
      }

      let selectProgressBarLeft = document.getElementById(`progress-bar-left-${i}`);
      let selectProgressBarRight = document.getElementById(`progress-bar-right-${i}`);

      animateProgressBar(selectProgressBarLeft, valueProgressLeft, 1000);
      animateProgressBar(selectProgressBarRight, valueProgressRight, 0);
    }

  }


}
