import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-ap',
  templateUrl: './img-ap.component.html',
  styleUrls: ['./img-ap.component.css'],
})
export class ImgAPComponent implements OnInit {
  //binding
  logoAp = '../../../assets/img/APLogo.png';

  ngOnInit(): void {}
}
