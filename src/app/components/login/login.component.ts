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
      this.admin = data.Admin;
    });
  }

  login(event: Event) {
    event.preventDefault;

    if (this.formValueLogin.valid) {
      let email = this.formValueLogin.get('email')?.value;
      let password = this.formValueLogin.get('password')?.value;
      if (email == 'pepito@gmail.com' && password == 'pepito123') {
        alert('Welcome Admin!!');
        this.router.navigate(['/']);
      } else {
        this.formValueLogin.markAllAsTouched();
        alert('Data incorrect');
      }
    }
  }

  // home page
  handlerClick() {
    this.router.navigate(['/']);
  }
}
