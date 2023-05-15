import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-change-education',
  templateUrl: './change-education.component.html',
  styleUrls: ['./change-education.component.css'],
})
export class ChangeEducationComponent implements OnInit {
  //json data
  listofCourses: any;

  //form update education
  formValueEducation = new FormGroup({
    institution: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40),
    ]),
    degree: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40),
    ]),
    date: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  });
  constructor(private datosPortfolio: PortfolioService) {}

  //suscribe para utilizar el data.json
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.listofCourses = data.education;
    });
  }

  //to implement with the service
  //update(): void {
  // this.educationService.editEducation(this.listOfCourses.id).subscribe(
  //  (data) => {
  //    alert('Education updated successfully');
  //  },
  //  (err) => {
  //    alert('Error al modificar la educacion');
  //  }
  //);
  // }

  // update(id:number){
  // this.update = id;
  //}
}
