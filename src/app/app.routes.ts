import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home/home.component';
// import {LoginComponent} from './login/login.component';
import { AppComponent } from './app.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { DetailsComponent } from './restaurante/details/details.component';
import { EditarComponent } from './restaurante/editar/editar.component';
import { SalvarComponent } from './restaurante/salvar/salvar.component';
import { PratoCadComponent } from './restaurante/prato-cad/prato-cad.component';
import { PratoEditComponent } from './restaurante/prato-edit/prato-edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

        // {path: '', component: LoginComponent},
        {path: 'restaurante', component: RestauranteComponent},
        {path: 'restaurante/details', component: DetailsComponent},
        {path: 'restaurante/editar', component: EditarComponent},
        {path: 'restaurante/salvar', component: SalvarComponent},
        {path: 'restaurante/cadastrarPrato', component: PratoCadComponent},
        {path: 'restaurante/pratoEdit', component: PratoEditComponent},
        {path: '**', component: HomeComponent},
        {path: '', component: HomeComponent}
    ];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
