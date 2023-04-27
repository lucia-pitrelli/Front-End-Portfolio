import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:5000/'; // o /8080?
  constructor(private http: HttpClient, private route: Router) {
    console.log('autentication service is working');
  }
}
