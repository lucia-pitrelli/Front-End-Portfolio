import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkill } from 'src/app/models/hardSkill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HardskillService {
  //URL backend
  baseUrl = `${environment.urlApi}/hardskills`;

  constructor(private http: HttpClient) {}

  //list
  getHardSkills(): Observable<HardSkill[]> {
    return this.http.get<HardSkill[]>(this.baseUrl + '/list');
  }

  getHardSkillById(id: number): Observable<HardSkill> {
    return this.http.get<HardSkill>(this.baseUrl + '/id/' + id);
  }
}
