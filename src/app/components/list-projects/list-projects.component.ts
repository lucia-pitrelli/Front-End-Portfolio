import { Component, OnInit } from '@angular/core';
//import { PROJECTS } from 'src/app/mock-projects';
//import { Project } from 'src/app/Project';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css'],
})
//export class NgIfSimple {
//
//}
export class ListProjectsComponent implements OnInit {
  listProjects: any;
  mostrar = true;
  constructor(private datosPortfolio: PortfolioService) {}

  //suscribe para utilizar el data.json
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.listProjects = data.projects; //entra a data.json y luego entra a el array projects para poder usar las variables de adentro
    });
  }
}

/*colocar input en el import si lo quiero usar*/
// listProjects = PROJECTS;
//  @Input() projects: Project[] = [];
