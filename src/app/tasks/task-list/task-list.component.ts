import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() projectId!: number;
  tasks: any[] = [];

  constructor(private tasksService: TasksService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.projectId = Number(this.route.snapshot.paramMap.get('projectId'));
    if (this.projectId) {
      this.tasksService.getTasksByProjectId(this.projectId).subscribe((data) => {
        this.tasks = [data];
      });
    }
  }
}
