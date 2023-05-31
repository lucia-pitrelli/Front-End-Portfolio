import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkill } from '../models/softSkill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SoftskillService {
  //URL backend
  baseUrl = `${environment.urlApi}/softskills`;

  constructor(private http: HttpClient) {}

  //list
  getSoftSkills(): Observable<SoftSkill[]> {
    return this.http.get<SoftSkill[]>(this.baseUrl + '/list');
  }

  getSoftSkillById(id: number): Observable<SoftSkill> {
    return this.http.get<SoftSkill>(this.baseUrl + '/id/' + id);
  }
}
