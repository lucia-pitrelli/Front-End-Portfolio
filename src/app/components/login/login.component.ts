import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
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
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login(event: Event) {
    event.preventDefault;

    if (this.formValueLogin.valid) {
      alert('Welcome Admin!!');
      this.router.navigate(['/']);
    } else {
      this.formValueLogin.markAllAsTouched();
    }

    //send data to firebase
    // const email = this.formValueLogin.value.email;
    // const password = this.formValueLogin.value.password;
    //show data in console
    //console.warn(this.formValueLogin.value);
    // this.afAuth
    //  .signInWithEmailAndPassword(email, password)
    // .then((user) => {
    //   console.log(user);
    // })
    // .catch((error) => {
    //   console.log(error);
    //  });
  }

  // home page
  handlerClick() {
    this.router.navigate(['/']);
  }
}
