import { Component, OnInit } from '@angular/core';

import { EducationService } from 'src/app/services/education.service';

import { Education } from 'src/app/models/education';

import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-change-education',
  templateUrl: './change-education.component.html',
  styleUrls: ['./change-education.component.css'],
})
export class ChangeEducationComponent implements OnInit {
  //service data
  listOfCourses = null;

  educationUpdate = {
    institution: '',
    degree: '',
    date: '',
  };

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
  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    //  this.getEducation();
  }

  //get list of educations
  //getEducation(): void {
  // this.educationService
  //   .getEducation()
  //   .subscribe((listOfCourses) => (this.listOfCourses = listOfCourses));
  // }

  //to implement with the service
  //update(id: number): void {
  // this.educationService.editEducation(this.listOfCourses.id).subscribe(
  //  (data) => {
  //    alert('Education updated successfully');
  // },
  // (err) => {
  //   alert('Error al modificar la educacion');
  //  }
  // );
  //}

  // update(id:number){
  // this.update = id;
  //}

  //update(data) {
  //  this.educationUpdate;
  // }
}
