import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  //URL backend
  baseUrl = `${environment.urlApi}/personas`;

  constructor(private http: HttpClient) {}

  //list of personas
  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.baseUrl + '/list');
  }

  //one persona user
  getPersonaById(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.baseUrl + '/id/' + id);
  }

  //update one persona
  editPersona(data: Persona): Observable<Persona> {
    return this.http
      .put<Persona>(this.baseUrl + '/update', data)
      .pipe(map((res) => res));
    //  .pipe(tap(() => this.Refreshrequired.next()));    VER SI LO UTILIZO
  }
}
