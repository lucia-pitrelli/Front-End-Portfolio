import { Component, OnInit } from '@angular/core';

import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  //service data
  listOfCourses: Education[] = [];

  //modal btn hide
  showadd!: boolean;
  showupdate!: boolean;

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.getEducation();
  }

  //get list of educations
  getEducation(): void {
    this.educationService
      .getEducation()
      .subscribe((listOfCourses) => (this.listOfCourses = listOfCourses));
  }

  //delete one education
  delete(id?: number) {
    if (id != undefined) {
      this.educationService.deleteEducation(id).subscribe(
        (data) => {
          this.getEducation();
          alert('Education deleted');
        },
        (err) => {
          alert('Error deleting education');
        }
      );
    }
  }

  //hide btn add
  // add() {
  //  this.showadd = true;
  // this.showupdate = false;
  // }

  //hide btn update
  // update() {
  //  this.showadd = false;
  //  this.showupdate = true;
  //}
}
