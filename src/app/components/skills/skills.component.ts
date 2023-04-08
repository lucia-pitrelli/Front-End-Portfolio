import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  mySkills: any;
  listOfSkills: any;
  //percentage: number = 10;

  //n = 15;

  constructor(private datosPortfolio: PortfolioService) {}

  //suscribe to use db.json
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);

      this.mySkills = data.softSkills; //entra a data.json y luego entra a el array projects para poder usar las variables de adentro
      this.listOfSkills = data.hardSkills;
    });
  }

  /* onProgress(side: number) {
    //implementation of limitations of progress bar
    if (this.percentage <= 10) {
      this.percentage = 15;
    }
    if (this.percentage >= 100) {
      this.percentage = 95;
    }
    // add value to progress bar, 5 to 5
    if (side) {
      //plus
      this.percentage += 5;
    } else {
      //minus
      this.percentage -= 5;
    }
  }*/
}
