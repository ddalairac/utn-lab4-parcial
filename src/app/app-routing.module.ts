import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaActorComponent } from './components/pages/actores/alta-actor/alta-actor.component';
import { ListaActorComponent } from './components/pages/actores/lista-actor/lista-actor.component';
import { AuthUserComponent } from './components/pages/auth-user/auth-user.component';
import { BienvenidoComponent } from './components/pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/pages/busqueda/busqueda.component';
import { AltaPeliculaComponent } from './components/pages/peliculas/alta-pelicula/alta-pelicula.component';
import { ListaPeliculaComponent } from './components/pages/peliculas/lista-pelicula/lista-pelicula.component';
import { UrlValidateService } from './services/url-validate.service';

const routes: Routes = [
    { path: 'authuser', component: AuthUserComponent },
    // { path: 'juegos',       component: JuegosComponent,             canActivate: [UrlValidateService], children: [
    //         { path: '',                     component: MenuCardComponent },
    //         { path: 'adivina',              component: AdivinaElNumeroComponent },
    //         { path: 'adivinaMasListado',    component: AdivinaMasListadoComponent },
    //     ]
    // },
    { path: 'bienvenido',                   component: BienvenidoComponent,     canActivate: [UrlValidateService]  },
    { path: 'busqueda',                     component: BusquedaComponent,       canActivate: [UrlValidateService]  },
    { path: 'pelicula/alta',                component: AltaPeliculaComponent,   canActivate: [UrlValidateService]  },
    { path: 'pelicula/listado',             component: ListaPeliculaComponent,  canActivate: [UrlValidateService]  },
    { path: 'actor/alta',                   component: AltaActorComponent,      canActivate: [UrlValidateService]  },
    { path: 'actor/listado',                component: ListaActorComponent,     canActivate: [UrlValidateService]  },
    { path: '', redirectTo: 'pelicula/listado', pathMatch: 'full' },
    // { path: '**',           component: ErrorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
