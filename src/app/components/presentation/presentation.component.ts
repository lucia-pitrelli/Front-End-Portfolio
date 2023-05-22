import { Component, OnInit } from '@angular/core';

import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnInit {
  //service data
  myPresentation: Persona[] = [];

  //binding
  myImage = '../../../../assets/img/third-img.png';

  greeting = 'Hello, I´m ';

  //modal btn hide
  showupdate!: boolean;

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.getPersonas();
  }

  //get list
  getPersonas(): void {
    this.personaService
      .getPersonas()
      .subscribe((myPresentation) => (this.myPresentation = myPresentation));
  }

  //hide btn update
  update() {
    this.showupdate = true;
  }
}
