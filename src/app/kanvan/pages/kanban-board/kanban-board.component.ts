import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {
arreglo:any[]=[];
tarea:string='';

  constructor() { }

  ngOnInit(): void {
  }

  addTarea(){


  }

}
