import { Component, OnInit } from '@angular/core';

import { PersonaService } from 'src/app/services/persona.service';

import { Persona } from 'src/app/models/persona';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  //service data
  AboutMe: Persona[] = [];

  //data binding
  gifAbout = '../../../assets/perfil.gif';

  //modal btn hide
  showupdate!: boolean;

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.getPersona();
  }

  //get list
  getPersona(): void {
    this.personaService
      .getPersona()
      .subscribe((AboutMe) => (this.AboutMe = AboutMe));
  }

  //hide btn update
  update() {
    this.showupdate = true;
  }
}
