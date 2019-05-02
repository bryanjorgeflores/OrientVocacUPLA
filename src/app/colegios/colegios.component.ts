import { Component, OnInit } from '@angular/core';
import { Colegio } from 'src/interfaces/colegios';

@Component({
  selector: 'app-colegios',
  templateUrl: './colegios.component.html',
  styleUrls: ['./colegios.component.scss']
})
export class ColegiosComponent implements OnInit {
  colegios: Colegio[];
  constructor() {
    let colegio1:Colegio={
      codigo: '1',
      nombre: 'I.E. AMAUTA',
      ubicacion: 'AHUAC',
      clave: 'aqwrt',
      total: '3'
    };
    let colegio2:Colegio={
      codigo: '2',
      nombre: 'I.E. SAN AGUSTIN',
      ubicacion: 'CAJAS',
      clave: 'pcbty',
      total: '0'
    };
    let colegio3:Colegio={
      codigo: '3',
      nombre: 'I.E. ABELARDO QUIÑONES',
      ubicacion: 'CHILCA',
      clave: 'gnrer',
      total: '0'
    }
    this.colegios = [colegio1,colegio2,colegio3];
  
   }

  ngOnInit() {
  }

}
