import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-about',
  templateUrl: './change-about.component.html',
  styleUrls: ['./change-about.component.css'],
})
export class ChangeAboutComponent implements OnInit {
  //json data
  aboutMe: any;

  gifAbout = '../../../assets/perfil.gif';

  //form gif about me
  formValueGif = new FormGroup({
    gif: new FormControl('', [Validators.required]),
  });

  constructor(private datosPortfolio: PortfolioService) {}

  //suscribe para utilizar el data.json
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.aboutMe = data.about; //entra a data.json y luego entra a el array projects para poder usar las variables de adentro
    });
  }
}
