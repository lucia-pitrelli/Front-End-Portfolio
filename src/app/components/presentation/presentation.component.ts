import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnInit {
  //json data
  myPresentation: any;

  //binding
  myImage = '../../../../assets/img/third-img.png';

  greeting = 'Hello, I´m ';

  //modal btn hide
  showupdate!: boolean;

  constructor(private datosPortfolio: PortfolioService) {}

  //suscribe para utilizar el data.json
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      //console.log('funciona presentacion', data);
      this.myPresentation = data.persona;
    });
  }

  //hide btn update
  update() {
    this.showupdate = true;
  }
}
