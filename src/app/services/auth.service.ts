import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Router } from '@angular/router';
//import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //url = 'http://localhost:4200/'; // 8080?

  constructor() {
    console.log('autentication service is working');
  }

  private loggedIn = false;

  login() {
    // add a value to the local storage
    localStorage.setItem('token', 'xhja787');
    this.loggedIn = true;
  }

  logout() {
    // remove token in local storage
    localStorage.removeItem('token');
    this.loggedIn = false;
  }

  //ask if user is logged in
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  // o puede ser de manera de servicio
  // public get isLoggedIn(): boolean {
  // return(localStorage.getItem('token') !== null);
  //}
}
