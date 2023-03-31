import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  mySkills: any;
  //listOfSkills: any;
  percentage: number = 10;

  listOfSkills = [
    { id: 1, name: 'Javascript', percentage: '50' },
    { id: 2, name: 'Typescript', percentage: '70' },
    { id: 3, name: 'Java', percentage: '80' },
    { id: 4, name: 'Data Base', percentage: '60' },
    { id: 5, name: 'Angular', percentage: '20' },
    { id: 6, name: 'HTML', percentage: '30' },
    { id: 7, name: 'CSS', percentage: '70' },
    { id: 8, name: 'Bootstrap', percentage: '90' },
    { id: 9, name: 'Scrum', percentage: '40' },
  ];

  //n = 15;

  constructor(private datosPortfolio: PortfolioService) {}

  //suscribe to use db.json
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);

      this.mySkills = data.skills; //entra a data.json y luego entra a el array projects para poder usar las variables de adentro
      //  this.listOfSkills = data.skillsList;
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
