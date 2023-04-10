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

  // formValue!: FormGroup;

  formValue = new FormGroup({
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200),
    ]),
  });

  // private formBuilder: FormBuilder no lo coloco en constructor

  constructor(private datosPortfolio: PortfolioService) {}

  //suscribe para utilizar el data.json
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.aboutMe = data.about; //entra a data.json y luego entra a el array projects para poder usar las variables de adentro

      //  this.formValue = this.formBuilder.group({
      //  description: ['', Validators.required],
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
