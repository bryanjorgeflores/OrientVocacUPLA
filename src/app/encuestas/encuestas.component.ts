import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/interfaces/encuestas';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.scss']
})
export class EncuestasComponent implements OnInit {
  encuestas :Encuesta[];
  constructor() { 
    let encuesta1:Encuesta={
      nombre: 'Encuesta 1',
      detalle: 'Informacion de la encuesta 1',
      src:'../../assets/login.jpg',
      porcentaje: '50%',
      color: 'yellow',
    };
    let encuesta2:Encuesta={
      nombre: 'Encuesta 2',
      detalle: 'Informacion de la encuesta 2',
      src:'../../assets/login2.jpg',
      porcentaje: '60%',
      color: 'blue',
    };
    let encuesta3:Encuesta={
      nombre: 'Encuesta 3',
      detalle: 'Informacion de la encuesta 3',
      src:'../../assets/login.jpeg',
      porcentaje: '78%',
      color: 'black',
    }
    this.encuestas = [ encuesta1, encuesta2, encuesta3];
  }

  ngOnInit() {
}

}
