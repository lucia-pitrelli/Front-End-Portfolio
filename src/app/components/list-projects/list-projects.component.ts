import { Component, OnInit } from '@angular/core';

import { Project } from 'src/app/models/Project';
//import { PortfolioService } from 'src/app/services/portfolio.service';
import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css'],
})
export class ListProjectsComponent implements OnInit {
  //json data
  //listProjects: any;

  //service
  listProjects: Project[] = [];

  //testing login
  //mostrar = true;

  //modal btn hide
  showadd!: boolean;
  showupdate!: boolean;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  //get list
  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((listProjects) => (this.listProjects = listProjects));
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
