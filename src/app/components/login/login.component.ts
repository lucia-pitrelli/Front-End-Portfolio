import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //json data
  admin: any;

  //form login
  formValueLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(
    private router: Router,
    private datosPortfolio: PortfolioService
  ) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log('login', data);
      this.admin = data.Admin; //entra a data.json y luego entra a el array projects para poder usar las variables de adentro
    });
  }

  login(event: Event) {
    event.preventDefault;

    if (this.formValueLogin.valid) {
      alert('Welcome Admin!!');
      this.router.navigate(['/']);
    } else {
      this.formValueLogin.markAllAsTouched();
    }
  }

  // home page
  handlerClick() {
    this.router.navigate(['/']);
  }
}
