import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //form login
  formValueLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) {}

  handlerClick() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {}

  //coloco modo oscuro
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
