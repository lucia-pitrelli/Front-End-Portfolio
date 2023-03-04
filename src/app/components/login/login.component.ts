import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //coloco modo oscuro
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
