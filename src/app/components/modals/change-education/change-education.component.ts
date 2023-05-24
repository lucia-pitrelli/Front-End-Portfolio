import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/models/education';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-change-education',
  templateUrl: './change-education.component.html',
  styleUrls: ['./change-education.component.css'],
})
export class ChangeEducationComponent implements OnInit {
  formValueEducation: FormGroup = new FormGroup({
    id: new FormControl(''),
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

  educationUpdate: Education = {} as Education;

  constructor(
    private educationService: EducationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const courseId = this.activatedRoute.snapshot.params['id'];
    this.educationService.getEducationById(courseId).subscribe(
      (data) => {
        this.educationUpdate = data;
        this.formValueEducation.setValue({
          id: this.educationUpdate.id,
          institution: this.educationUpdate.institution,
          degree: this.educationUpdate.degree,
          date: this.educationUpdate.date,
        });
      },
      (err) => {
        console.error('primer error', err);
        alert('error actualizar');
        this.router.navigate(['']);
      }
    );
  }

  onSubmit() {
    if (this.formValueEducation.valid) {
      // me actualiza los valores de la educación con los valores del formulario
      this.educationUpdate.institution =
        this.formValueEducation.value.institution;
      this.educationUpdate.degree = this.formValueEducation.value.degree;
      this.educationUpdate.date = this.formValueEducation.value.date;

      // me actualiza data base
      this.educationService.editEducation(this.educationUpdate).subscribe(
        (data) => {
          console.log('respuesta del servicio:', data);
          alert('educación actualizada');
          this.router.navigate(['']);
        },
        (err) => {
          console.error('segundo error', err);
          alert('error al editar la educación');
        }
      );
    }
  }
}
