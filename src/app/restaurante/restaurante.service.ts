import { RestauranteComponent } from './restaurante.component';
import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestauranteService {

    private apiUrl: any = 'http://localhost:59158/api/';
    restaurantes: Object[] = [];
    pratos: Object[] = [];

    headers: Headers;
    options: RequestOptions;

    restauranteNome: string;
    restauranteEdit: string;
    restauranteSave: any;
    restaurant: any;

    constructor(public http: Http) {
        this.headers = new Headers({
          'Content-Type': 'application/json',
          Accept: 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
        this.restaurantesAll();

    }

    restaurantesAll() {
        this.http.get(this.apiUrl + 'restaurante/getAll')
            .map(res => res.json())
            .subscribe(
            restaurantes => this.restaurantes = restaurantes,
            erro => console.log(erro)
            );
    }

    restauranteGetOne(nome: string) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + 'restaurante/getOne/' + nome)
                .subscribe((result: any) => {
                    resolve(result.json());
                },
                (error) => {
                    reject(error.json());
                });
        });
    }

    pratoAll(nome: string) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + 'pratos/getAll/' + nome)
                .subscribe((result: any) => {
                    resolve(result.json());
                },
                (error) => {
                    reject(error.json());
                });
        });
    }

    restauranteDelete(restaurante) {

        return this.http.delete(this.apiUrl + 'restaurante/deleta/' + restaurante.nome)
        .map(res => res.json());
    }

    pratoDelete(pratos) {

        return this.http.delete(this.apiUrl + 'pratos/deleta/' + pratos.nome)
        .map(res => res.json());
    }

    restauranteCreate(restauranteEdit) {
        return new Promise((resolve, reject) => {
          const data = {
            nome: restauranteEdit.nome,
            bairro: restauranteEdit.bairro,
            rua: restauranteEdit.rua,
            numero: restauranteEdit.numero
          };

          this.http.post(this.apiUrl + 'restaurante/create', data)
            .subscribe((result: any) => {
              resolve(result.json());
            },
            (error) => {
              reject(error.json());
            });
        });
      }


    updateRestaurante(restauranteEdit) {
    return new Promise((resolve, reject) => {
        const data = {
        id: restauranteEdit.restauranteId,
        nome: restauranteEdit.nome,
        bairro: restauranteEdit.bairro,
        rua: restauranteEdit.rua,
        numero: restauranteEdit.numero
        };

        this.http.put(this.apiUrl + 'restaurante/update', data)
        .subscribe((result: any) => {
            resolve(result.json());
        },
        (error) => {
            reject(error.json());
        });
    });
    }


    pratoCreate(restauranteEdit) {
        return new Promise((resolve, reject) => {
          const data = {
            nome: restauranteEdit.nome,
            preco: restauranteEdit.preco,
            restaurante: restauranteEdit.restaurant
          };

          this.http.post(this.apiUrl + 'pratos/create', data)
            .subscribe((result: any) => {
              resolve(result.json());
            },
            (error) => {
              reject(error.json());
            });
        });
      }


    pratoUpdate(restauranteEdit) {
    return new Promise((resolve, reject) => {
        const data = {
        id: restauranteEdit.pratoId,
        nome: restauranteEdit.nome,
        preco: restauranteEdit.preco
        };

        this.http.put(this.apiUrl + 'pratos/update', data)
        .subscribe((result: any) => {
            resolve(result.json());
        },
        (error) => {
            reject(error.json());
        });
    });
    }
}
