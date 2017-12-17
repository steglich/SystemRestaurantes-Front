import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import {Router} from '@angular/router';

import { RestauranteService } from './restaurante.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})

export class RestauranteComponent implements OnInit {

  router: Router;

  constructor(public http: Http, _router: Router, private restaurante: RestauranteService) {
    this.router = _router;
  }

  ngOnInit() {
    this.restaurante.restaurantesAll();
  }

  details(restaurante) {
    // this.restaurante.restauranteNome = this.campoValoImput.nativeElement.value;
    this.restaurante.restauranteNome = restaurante;
    this.router.navigateByUrl('/restaurante/details');
  }

  cad() {
    this.router.navigateByUrl('/restaurante/salvar');
  }

}
