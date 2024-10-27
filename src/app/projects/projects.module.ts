import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';


import { ProjectsRoutingModule } from './projects-routing.module';


@NgModule({
  declarations: [ ProjectListComponent ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HttpClientModule,
    MatCardModule
  ]
})
export class ProjectsModule { }
