import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnInit {
  //json data
  myPresentation: any;

  myImage = '../../../../assets/img/third-img.png';

  //modal btn hide
  showupdate!: boolean;

  //form presentation
  formValuePresentation = new FormGroup({
    greeting: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25),
    ]),
    name: new FormControl('', [
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
      this.myPresentation = data.banner;
    });
  }

  //hide btn update
  update() {
    this.showupdate = true;
  }
}
