import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Education } from 'src/app/models/education';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  //URL backend
  baseUrl = `${environment.urlApi}/educations`;

  constructor(private http: HttpClient) {}

  //list of Educations
  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.baseUrl + '/list');
  }

  //one Education
  getEducationById(id: number): Observable<Education> {
    return this.http.get<Education>(this.baseUrl + '/id/' + id);
  }

  //create a new Education
  createEducation(data: Education): Observable<Education> {
    return this.http
      .post<Education>(this.baseUrl + '/create', data)
      .pipe(map((res) => res));
  }

  //update one Education
  editEducation(data: Education): Observable<Education> {
    return this.http
      .put<Education>(this.baseUrl + '/update', data)
      .pipe(map((res) => res));
  }

  //delete one Education
  deleteEducation(id: number): Observable<any> {
    return this.http
      .delete(this.baseUrl + '/delete/' + id)
      .pipe(map((res) => res));
  }
}
