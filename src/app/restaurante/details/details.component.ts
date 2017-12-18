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
    console.log(this.pratos);
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

  deletePrato(prato) {
    this.restaurante.pratoDelete(prato)
    .subscribe(null);
    this.getOnePrato(this.restaurante.restauranteNome);
  }

  editar(restauranteNome) {
    // this.restaurante.restauranteDelete(restauranteNome)
    // .subscribe(null);
    // console.log(restauranteNome);
    // this.restaurante.restaurantesAll();
    this.restaurante.restauranteEdit = restauranteNome;
    this.router.navigateByUrl('/restaurante/editar');
  }

  editarPrato(prato) {
    // this.restaurante.restauranteDelete(restauranteNome)
    // .subscribe(null);
    // console.log(restauranteNome);
    // this.restaurante.restaurantesAll();
    this.restaurante.pratos = prato;
    console.log(this.restaurante.pratos);
    this.router.navigateByUrl('/restaurante/pratoEdit');
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

  pratoCad(restauranteNome) {
    this.restaurante.restaurant = restauranteNome;
    this.router.navigateByUrl('/restaurante/cadastrarPrato');
  }

}
