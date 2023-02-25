import { Component, Input } from '@angular/core';
import { PROJECTS } from 'src/app/mock-projects';
import { Project } from 'src/app/Project';
@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css'],
})
export class ListProjectsComponent {
  listProjects = PROJECTS;
  @Input() projects: Project[] = [];
}
