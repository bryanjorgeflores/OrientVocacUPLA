import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  
preguntas: Array<any> = [
  { titulo: 'Pregunta 1', respuesta: 'respuesta 1', opcion1: '1', opcion2: '2' },
  { titulo: 'Pregunta 2', respuesta: 'respuesta 2', opcion1: '1', opcion2: '2' },
  { titulo: 'Pregunta 3', respuesta: 'respuesta 3', opcion1: '1', opcion2: '2' },
  { titulo: 'Pregunta 4', respuesta: 'respuesta 4', opcion1: '1', opcion2: '2' },

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
