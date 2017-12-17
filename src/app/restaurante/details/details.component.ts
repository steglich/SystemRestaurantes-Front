import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { RestauranteService } from './../restaurante.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @ViewChild('campoValo') campoValoImput: ElementRef;

  pratos: Object[] = [];
  restauranteNome:  Object[] = [];
  nome: string;

  constructor(private router: Router, private restaurante: RestauranteService) {
    this.getOnePrato(this.restaurante.restauranteNome);
    this.getOneRestaurante(this.restaurante.restauranteNome);
  }

  ngOnInit() {
  }

  ngondestroy() {
    this.restaurante.restaurantesAll();
  }

  delete(restauranteNome) {
    // this.restauranteDel(restauranteNome);
    this.restaurante.restauranteDelete(restauranteNome)
    .subscribe(null);
    console.log(restauranteNome);
    this.restaurante.restaurantesAll();
    this.router.navigateByUrl('/restaurante');
    // this.router.navigate.apply('/restaurante');
  }

  editar(restauranteNome) {
    // this.restaurante.restauranteDelete(restauranteNome)
    // .subscribe(null);
    // console.log(restauranteNome);
    // this.restaurante.restaurantesAll();
    this.restaurante.restauranteEdit = restauranteNome;
    this.router.navigateByUrl('/restaurante/editar');
  }

  getOnePrato(nome: string) {
    this.restaurante.pratoAll(nome)
      .then((result: any) => {
        this.pratos = result;
      });
  }

  getOneRestaurante(nome: string) {
    this.restaurante.restauranteGetOne(nome)
      .then((result: any) => {
        this.restauranteNome = result;
      });
  }

}
