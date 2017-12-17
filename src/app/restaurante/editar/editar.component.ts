import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { RestauranteService } from './../restaurante.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  restauranteNome:  Object[] = [];
  restauranteEdit:  Object[] = [];
  nome: string;
  restauranteId: number;

  constructor(private router: Router, private restaurante: RestauranteService) {
    this.getOneRestaurante(this.restaurante.restauranteNome);
   }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.restauranteEdit);
    this.restaurante.updateRestaurante(this.restauranteEdit);
    this.router.navigateByUrl('/restaurante');
  }

  getOneRestaurante(nome: string) {
    this.restaurante.restauranteGetOne(nome)
      .then((result: any) => {
        this.restauranteEdit = result;
      });
  }

}
