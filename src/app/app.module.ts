import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoBackComponent } from './components/cross/go-back/go-back.component';
import { LoaderComponent } from './components/cross/loader/loader.component';
import { MenuComponent } from './components/cross/menu/menu.component';
import { environment } from '../environments/environment';
import { MaterialModule } from './vendors/material.module';
import { AuthUserComponent } from './components/pages/auth-user/auth-user.component';
import { LoginComponent } from './components/pages/auth-user/login/login.component';
import { RegisterComponent } from './components/pages/auth-user/registro/register.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AltaPeliculaComponent } from './components/pages/peliculas/alta-pelicula/alta-pelicula.component';
import { ListaPeliculaComponent } from './components/pages/peliculas/lista-pelicula/lista-pelicula.component';
import { ListaActorComponent } from './components/pages/actores/lista-actor/lista-actor.component';
import { AltaActorComponent } from './components/pages/actores/alta-actor/alta-actor.component';
import { BienvenidoComponent } from './components/pages/bienvenido/bienvenido.component';
import { TableComponent } from './components/cross/table/table.component';
import { BusquedaComponent } from './components/pages/busqueda/busqueda.component';
import { DetalleActorComponent } from './components/pages/actores/detalle-actor/detalle-actor.component';
import { DetallePeliculaComponent } from './components/pages/peliculas/detalle-pelicula/detalle-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    GoBackComponent,
    LoaderComponent,
    MenuComponent,
    AuthUserComponent,
    LoginComponent,
    RegisterComponent,
    AltaPeliculaComponent,
    ListaPeliculaComponent,
    ListaActorComponent,
    AltaActorComponent,
    BienvenidoComponent,
    TableComponent,
    BusquedaComponent,
    DetalleActorComponent,
    DetallePeliculaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, // auth
    AngularFirestoreModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
