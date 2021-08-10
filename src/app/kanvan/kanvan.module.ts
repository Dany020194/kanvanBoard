import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { InputComponent } from './components/input/input.component';
import { KanbanBoardComponent } from './pages/kanban-board/kanban-board.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableComponent,
    InputComponent,
    KanbanBoardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    KanbanBoardComponent
  ]
})
export class KanvanModule { }
