import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutMe } from '../models/aboutMe';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  //URL backend
  baseUrl = `${environment.urlApi}/abouts`;

  constructor(private http: HttpClient) {}

  //list
  getAbouts(): Observable<AboutMe[]> {
    return this.http.get<AboutMe[]>(this.baseUrl + '/list');
  }

  getAbout(id: number): Observable<AboutMe> {
    return this.http.get<AboutMe>(this.baseUrl + '/id/' + id);
  }
}
