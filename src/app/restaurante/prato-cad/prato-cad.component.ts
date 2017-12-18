import { browser } from 'protractor';
import { URLSearchParams } from '@angular/http';
import { Location } from '@angular/common';
import { routing } from './../../app.routes';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { RestauranteService } from './../restaurante.service';

@Component({
  selector: 'app-prato-cad',
  templateUrl: './prato-cad.component.html',
  styleUrls: ['./prato-cad.component.css']
})
export class PratoCadComponent implements OnInit {

  restaurant: Object[] = [];

  constructor(private router: Router, private restaurante: RestauranteService) { }

    ngOnInit() {
      this.restaurant = this.restaurante.restaurant;
    }

    onSubmit(form) {
      console.log(form);
      this.restaurante.pratoCreate(form.value);
      this.restaurante.restaurantesAll();
      this.router.navigateByUrl('/restaurante');
    }
}
