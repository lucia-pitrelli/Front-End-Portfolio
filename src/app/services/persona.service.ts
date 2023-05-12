import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  baseUrl = `${environment.url_api}/api/personas`;

  constructor(private http: HttpClient) {}

  //list of personas

  getPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.baseUrl);
  }

  //one persona user

  getPersonaById(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.baseUrl}/${id}`);
  }

  //create a new persona

  postPersona(data: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.baseUrl, data).pipe(map((res) => res));
    //  .pipe(tap(() => this.Refreshrequired.next()));    VER SI LO UTILIZO en vez de map
  }

  //update one persona
  putPersona(data: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.baseUrl, data).pipe(map((res) => res));
    //  .pipe(tap(() => this.Refreshrequired.next()));    VER SI LO UTILIZO
  }

  //delete one persona user
  deletePersona(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(map((res) => res));
    //  .pipe(tap(() => this.Refreshrequired.next()));    VER SI LO UTILIZO
  }
}
