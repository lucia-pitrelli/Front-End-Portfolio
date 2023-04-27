import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  //peticiones http para muestra de datos
  constructor(private http: HttpClient) {}

  // get db.json data
  obtenerDatos(): Observable<any> {
    return this.http.get('./assets/data/db.json');
    console.log('funciona el servicio');
  }
}
