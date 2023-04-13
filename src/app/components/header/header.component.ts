import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  //binding
  logoAp = '../../../assets/img/APLogo.png';

  titleHeader = '# Yo Programo';

  //hide login
  login = true;

  ngOnInit(): void {}
}
