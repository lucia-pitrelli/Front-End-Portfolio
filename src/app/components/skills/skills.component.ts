import { Component, OnInit } from '@angular/core';

//service hard skill
import { HardskillService } from 'src/app/services/hardskill.service';
import { HardSkill } from 'src/app/models/hardSkill';

//json data
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  //json data
  mySkills: any;

  //hardSkill service
  listOfSkills: HardSkill[] = [];

  //modal btn hide
  showadd!: boolean;
  showupdate!: boolean;

  constructor(
    private datosPortfolio: PortfolioService,
    private hardSkillService: HardskillService
  ) {}

  //suscribe to use db.json and service hard skill
  ngOnInit(): void {
    this.getHardSkills();
    this.getSoftSkill();
  }

  //get list of hard skills
  getHardSkills(): void {
    this.hardSkillService
      .getHardSkills()
      .subscribe((listOfSkills) => (this.listOfSkills = listOfSkills));
  }

  //get list soft skill
  getSoftSkill(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.mySkills = data.softSkills;
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
