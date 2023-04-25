import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-skills',
  templateUrl: './change-skills.component.html',
  styleUrls: ['./change-skills.component.css'],
})
export class ChangeSkillsComponent implements OnInit {
  //json data
  mySkills: any;
  // listOfSkills: any;

  //form soft Skills
  formValueSoftSkill = new FormGroup({
    softSkill: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(500),
    ]),
  });
  constructor(private datosPortfolio: PortfolioService) {}

  //suscribe to use db.json
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);

      this.mySkills = data.softSkills;
      // this.listOfSkills = data.hardSkills;
    });
  }
}
