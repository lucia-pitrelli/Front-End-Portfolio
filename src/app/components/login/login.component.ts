import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  //inyecta en el constructor el formbuilder

  constructor(private formBuilder: FormBuilder) {
    //controllers form login component
    this.form = this.formBuilder.group({
      email: ['', []],
      password: ['', []],
    });
    //console.log('ver usuario', this.form);
  }

  ngOnInit(): void {}

  //coloco modo oscuro
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
