import { Component, OnInit } from '@angular/core';

import { AboutMeService } from '../../services/about.service';

import { AboutMe } from '../../models/aboutMe';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  //service
  aboutMe: AboutMe[] = [];

  //data binding
  gifAbout = '../../../assets/perfil.gif';

  //modal btn hide
  showupdate!: boolean;

  constructor(private aboutMeService: AboutMeService) {}

  ngOnInit(): void {
    this.getAbouts();
  }

  //get list
  getAbouts(): void {
    this.aboutMeService
      .getAbouts()
      .subscribe((aboutMe) => (this.aboutMe = aboutMe));
  }

  //hide btn update
  update() {
    this.showupdate = true;
  }
}
