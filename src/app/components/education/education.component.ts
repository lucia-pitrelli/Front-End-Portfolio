import { Component, OnInit } from '@angular/core';

import { PortfolioService } from 'src/app/services/portfolio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  //json data
  listofCourses: any;

  //modal btn hide
  showadd!: boolean;
  showupdate!: boolean;

  //form education
  formValueEducation = new FormGroup({
    institution: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40),
    ]),
    degree: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40),
    ]),
    date: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  });

  constructor(private datosPortfolio: PortfolioService) {}

  //suscribe para utilizar el data.json
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.listofCourses = data.education; //entra a data.json y luego entra a el array projects para poder usar las variables de adentro
    });
  }

  //hide btn add
  add() {
    this.showadd = true;
    this.showupdate = false;
  }

  //hide btn update
  update() {
    this.showadd = false;
    this.showupdate = true;
  }
}
