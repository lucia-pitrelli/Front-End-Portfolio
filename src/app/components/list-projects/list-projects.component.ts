import { Component, OnInit, Input } from '@angular/core';

//import { Project } from 'src/app/models/Project';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css'],
})
export class ListProjectsComponent implements OnInit {
  //json data
  listProjects: any;

  //service (not working yet)
  // projects: Project[] = [];

  //testing login
  mostrar = true;

  //modal btn hide
  showadd!: boolean;
  showupdate!: boolean;

  constructor(private datosPortfolio: PortfolioService) {}

  //suscribe to use data.json
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.listProjects = data.projects;
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

  //add new project (not working yet)
  // selectedProject: Project = new Project();

  // addProject() {
  //   this.selectedProject.id = this.projects.length + 1;
  //    this.projects.push(this.selectedProject);
  //  }
}

/*colocar input en el import si lo quiero usar*/
// listProjects = PROJECTS;
