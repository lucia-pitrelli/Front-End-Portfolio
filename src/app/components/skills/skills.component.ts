import { Component, OnInit } from '@angular/core';

//service soft skill
import { SoftSkill } from 'src/app/models/softSkill';
import { SoftskillService } from 'src/app/services/softskill.service';

//service hard skill
import { HardskillService } from 'src/app/services/hardskill.service';
import { HardSkill } from 'src/app/models/hardSkill';

//json data
//import { PortfolioService } from 'src/app/services/portfolio.service';

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

  //softSkill service
  softSkill: SoftSkill[] = [];

  //modal btn hide
  showadd!: boolean;
  showupdate!: boolean;

  constructor(
    private hardSkillService: HardskillService,
    private softSkillService: SoftskillService
  ) {}

  //suscribe to use db.json and service hard skill
  ngOnInit(): void {
    this.getHardSkills();
    this.getSoftSkills();
  }

  //get list of hard skills
  getHardSkills(): void {
    this.hardSkillService
      .getHardSkills()
      .subscribe((listOfSkills) => (this.listOfSkills = listOfSkills));
  }

  //get soft skill
  getSoftSkills(): void {
    this.softSkillService
      .getSoftSkills()
      .subscribe((softSkill) => (this.softSkill = softSkill));
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
