import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-presentation',
  templateUrl: './change-presentation.component.html',
  styleUrls: ['./change-presentation.component.css'],
})
export class ChangePresentationComponent implements OnInit {
  //json data
  myPresentation: any;

  //binding
  myImage = '../../../../assets/img/third-img.png';

  greeting = 'Hello, I´m ';

  //form presentation
  formValuePresentation = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25),
    ]),
    position: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(35),
    ]),
    ubication: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
    ]),
  });

  //form img presentation
  formValueImg = new FormGroup({
    image: new FormControl('', [Validators.required]),
  });

  constructor(private datosPortfolio: PortfolioService) {}

  //suscribe para utilizar el data.json
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      //console.log('funciona presentacion', data);
      this.myPresentation = data.persona;
    });
  }
}
