import { browser } from 'protractor';
import { URLSearchParams } from '@angular/http';
import { Location } from '@angular/common';
import { routing } from './../../app.routes';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { RestauranteService } from './../restaurante.service';

@Component({
  selector: 'app-prato-edit',
  templateUrl: './prato-edit.component.html',
  styleUrls: ['./prato-edit.component.css']
})
export class PratoEditComponent implements OnInit {

  prato: Object[] = [];

  constructor(private router: Router, private restaurante: RestauranteService) { }

      ngOnInit() {
        this.prato = this.restaurante.pratos;
      }

      onSubmit(form) {
        console.log(form);
        this.restaurante.pratoUpdate(this.prato);
        this.router.navigateByUrl('/restaurante');
      }
  }
