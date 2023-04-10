import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'; //FormBuilder lo saco
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  //json data
  aboutMe: any;

  gifAbout = '../../../assets/perfil.gif';

  //modal btn hide
  showadd!: boolean;
  showupdate!: boolean;

  //form about me text
  formValue = new FormGroup({
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200),
    ]),
  });

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

  //hide btn add
  add() {
    this.showadd = true;
    this.showupdate = false;
  }

  //hide btn update
  update() {
    this.showadd = false;
    this.showupdate = true;
  }
}
