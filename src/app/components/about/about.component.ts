import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

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

  showupdate!: boolean;

  constructor(private datosPortfolio: PortfolioService) {}

  //suscribe para utilizar el data.json
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.aboutMe = data.about; //entra a data.json y luego entra a el array projects para poder usar las variables de adentro
    });
  }

  //hide btn update
  update() {
    this.showupdate = true;
  }
}
