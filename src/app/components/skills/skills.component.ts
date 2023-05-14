import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  //json data
  mySkills: any;
  listOfSkills: any;

  //modal btn hide
  showadd!: boolean;
  showupdate!: boolean;

  //form change Hard Skills
  formValueHardSkill = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20),
    ]),
    percentage: new FormControl('', [Validators.required]),
  });

  constructor(private datosPortfolio: PortfolioService) {}

  //suscribe to use db.json
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);

      this.mySkills = data.softSkills;
      this.listOfSkills = data.hardSkills;
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
