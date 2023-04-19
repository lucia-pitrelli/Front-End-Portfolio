import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  logoAp = '../../../assets/img/APLogo.png';

  //modal btn hide
  showupdate!: boolean;

  ngOnInit(): void {}

  //hide btn update
  update() {
    this.showupdate = true;
  }
}
