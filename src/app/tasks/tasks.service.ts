import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos/';
  
  constructor(private http: HttpClient) {}

  getTasksByProjectId(projectId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${projectId}`);
  }
}
