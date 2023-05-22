import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/Project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  //URL backend
  baseUrl = `${environment.urlApi}/projects`;

  constructor(private http: HttpClient) {}
  //list
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl + '/list');
  }

  //get one
  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(this.baseUrl + '/id/' + id);
  }
}
