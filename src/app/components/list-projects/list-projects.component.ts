import { Component, OnInit } from '@angular/core';
//import { PROJECTS } from 'src/app/mock-projects';
//import { Project } from 'src/app/Project';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css'],
})
export class ListProjectsComponent implements OnInit {
  //json data
  listProjects: any;

  //testing login
  mostrar = true;

  //modal btn hide
  showadd!: boolean;
  showupdate!: boolean;

  //form project
  formValueProject = new FormGroup({
    image: new FormControl('', [Validators.required]),
  });

  constructor(private datosPortfolio: PortfolioService) {}

  //suscribe to use data.json
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.listProjects = data.projects; //entra a data.json y luego entra a el array projects para poder usar las variables de adentro
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

/*colocar input en el import si lo quiero usar*/
// listProjects = PROJECTS;
//  @Input() projects: Project[] = [];
