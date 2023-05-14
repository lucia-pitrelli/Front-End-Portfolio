import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {
  //json data
  listProjects: any;

  //form add project
  formValueProject = new FormGroup({
    image: new FormControl('', [Validators.required]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25),
    ]),
    details: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(60),
    ]),
    date: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  });

  constructor(private datosPortfolio: PortfolioService) {}
  //suscribe to use data.json
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.listProjects = data.projects;
    });
  }
}
