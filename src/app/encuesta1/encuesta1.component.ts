import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuesta1',
  templateUrl: './encuesta1.component.html',
  styleUrls: ['./encuesta1.component.scss']
})
export class Encuesta1Component implements OnInit {
preguntas: Array<any> = [
  { titulo: 'Pregunta 1', respuesta: 'pendejo', opcion1:'1', opcion2:'2' },
  { titulo: 'Pregunta 2', respuesta: 'no sea webon', opcion1:'1', opcion2:'2'},
  { titulo: 'Pregunta 3', respuesta: 'aea mano me llega al pincho',opcion1:'1', opcion2:'2' },
  { titulo: 'Pregunta 4', respuesta: 'me llega al pito',opcion1:'1', opcion2:'2' },

];
entrada: number = 0;

  constructor() { }

  ngOnInit() {
  }

cambiarPregunta(): void {
  this.entrada++;

  if (this.entrada == this.preguntas.length) {
    this.entrada = 0;
  }
}

}
