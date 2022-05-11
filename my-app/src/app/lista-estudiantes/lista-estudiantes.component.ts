import { Component, OnInit, SelfDecorator } from '@angular/core';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.scss']
})
export class ListaEstudiantesComponent implements OnInit {
  recibido:boolean = false;
  trabaja:boolean = false;
  
  estudiantes=[
    {
      nombre:'Ricardo',
      nota:7,
      curso: 'Angular',
      ingreso: '2020',
      recibido: true,
      trabaja: false 
    },
    {
      nombre: 'Martina',
      nota:10,
      curso: 'React',
      ingreso: '2020',
      recibido: true,
      trabaja: true
    },
    {
      nombre:'Jose',
      nota:3,
      curso: 'Vue',
      ingreso: '2020',
      recibido: true,
      trabaja: false
    },
    {
      nombre:'Juan',
      nota:9,
      curso: 'Angular',
      ingreso: '2020',
      recibido: true,
      trabaja: true
    },
    {
      nombre:'Pedro',
      nota:8,
      curso: 'React',
      ingreso: '2020',
      recibido: true,
      trabaja: false
    },
    {
      nombre:'Juan Martin',
      nota:10,
      curso: 'marketing',
      ingreso: '2020',
      recibido: true,
      trabaja: false
    },
    {
      nombre:'ignacio',
      nota:4,
      curso: 'Vue',
      ingreso: '2020',
      recibido: true,
      trabaja: true
    },
    {
      nombre: 'adriana',
      nota:2,
      curso: 'Angular',
      ingreso: '2020',
      recibido: true,
      trabaja: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
