import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() arreglo: any;
  ocultar: boolean = false;
  column: number = 1
  constructor() { }


  ngOnInit(): void {
  }

  EliminarTarea(indice: number) {
    this.arreglo[indice].estatus = 0;
  }
  MoverAdelante(indice: number) {
    this.arreglo[indice].estatus++;
    console.log(this.arreglo)

  }
  MoverAtras(indice: number) {
    this.arreglo[indice].estatus--;
    console.log(this.arreglo)
  }
}
