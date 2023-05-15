import { Component, OnInit } from '@angular/core';

import { Education } from 'src/app/models/education';

import { EducationService } from 'src/app/services/education.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css'],
})
export class AddEducationComponent implements OnInit {
  institution: string = '';
  degree: string = '';
  date: number = 0;

  //form education
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

  ngOnInit(): void {}

  onCreate(): void {
    const edu = new Education(this.institution, this.degree, this.date);
    this.educationService.createEducation(edu).subscribe((data) => {
      alert('Added new education');
      window.location.reload();
    });
  }

  //if i decide to implement an btn clean
  // clean(): void {
  //  this.formValueEducation.reset();
  // }

  onSubmit(event: Event) {
    event.preventDefault;
    if (this.formValueEducation.valid) {
      this.onCreate();
    } else {
      alert("Data isn't valid. Please try again");
      this.formValueEducation.markAllAsTouched();
    }
  }
}
