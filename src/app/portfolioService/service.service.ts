import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

  obtenerDatos() {
    console.log('El servicio esta corriendo');
  }
}
