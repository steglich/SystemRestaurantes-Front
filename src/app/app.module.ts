import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';


import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestauranteService } from './restaurante/restaurante.service';
import { DetailsComponent } from './restaurante/details/details.component';
import { EditarComponent } from './restaurante/editar/editar.component';
import { SalvarComponent } from './restaurante/salvar/salvar.component';
import { Pesquisa } from './restaurante/restaurante.pipes';
import { PratoCadComponent } from './restaurante/prato-cad/prato-cad.component';


@NgModule({
  declarations: [
    AppComponent,
    RestauranteComponent,
    DetailsComponent,
    EditarComponent,
    SalvarComponent,
    Pesquisa,
    PratoCadComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule
  ],
  providers: [RestauranteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
