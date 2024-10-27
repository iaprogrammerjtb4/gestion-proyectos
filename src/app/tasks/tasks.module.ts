import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { MatDividerModule } from '@angular/material/divider'; 
import { MatCardModule } from '@angular/material/card'; 

@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class TasksModule { }
