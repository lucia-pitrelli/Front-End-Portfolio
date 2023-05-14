import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css'],
})
export class AddSkillsComponent implements OnInit {
  //json data
  mySkills: any;
  listOfSkills: any;

  //form add Hard Skills
  formValueAddHardSkill = new FormGroup({
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
}
