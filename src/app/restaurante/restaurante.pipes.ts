import { Pipe, PipeTransform } from '@angular/core';
import { RestauranteComponent } from './restaurante.component';

@Pipe({
    name: 'pesquisa'
})
export class Pesquisa implements PipeTransform {

    // transform(restaurante.restaurantes, digitado);
    transform(restaurantes, digitado) {

        digitado = digitado.toLowerCase();
        // tslint:disable-next-line:no-shadowed-variable
        return restaurantes.filter( restaurantes => restaurantes.nome.toLowerCase().includes(digitado));
    }

}
