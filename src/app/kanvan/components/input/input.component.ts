import { Component, OnInit } from '@angular/core';
import { Datework } from '../class/datework';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  arrtarea:any= new Array;
  objTarea:Datework=new Datework();
  tarea: string = '';
  activo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addTarea(){
    this.objTarea.estatus=1;
    var objeto = Object.assign({}, this.objTarea);

        if(this.arrtarea.filter((arreglo: { nombreTarea: string; })=>arreglo.nombreTarea==this.objTarea.nombreTarea).length>0){
          alert("La tarea ya esta registrada")
        } else{
          this.arrtarea.push(objeto);
          this.objTarea.nombreTarea='';
          console.log(this.arrtarea);
        }

    }
/*
    this.arrtarea.push(objeto);
    this.objTarea.nombreTarea='';
    console.log(this.arrtarea);
 */


}
