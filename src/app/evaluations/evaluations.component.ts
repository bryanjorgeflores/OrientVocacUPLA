import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/interfaces/encuestas';

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

  /* Para el selector de Fill Forward 
  statusFinalRotate(select: any, valueRotate: number) {
    select.style.transform = `rotate(${valueRotate * 3.6}deg)`
  }
  
  * Su Ejecucion.
  setTimeout(() => {
        this.statusFinalRotate(select, valueRotate);
      }, delay + 1000);
  */

  animateProgressBar(select: any, valueRotate: number, delay: number) {
    select.animate([
      { transform: 'rotate(0deg)' },
      { transform: `rotate(${valueRotate * 3.6}deg)` },
    ], {
        delay,
        duration: 1000,
        fill: 'forwards'
      }
    );

  }


  ngAfterViewInit() {
    for (let i = 0; i < this.tests.length; i++) {
      let valueProgressRight = this.tests[i].porcentaje;
      let valueProgressLeft = 0;

      if (valueProgressRight > 50) {
        valueProgressLeft = valueProgressRight - 50;
        valueProgressRight -= valueProgressLeft;
      }

      let selectProgressBarLeft = document.getElementById(`progress-bar-left-${i}`);
      let selectProgressBarRight = document.getElementById(`progress-bar-right-${i}`);

      this.animateProgressBar(selectProgressBarLeft, valueProgressLeft, 1000);
      this.animateProgressBar(selectProgressBarRight, valueProgressRight, 0);
    }

  }


}
