import { Component } from '@angular/core';

@Component({
  selector: 'p1-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
    menu = [
        {
            label: "bienvenido",
            path: "/bienvenido"
        },
        {
            label: "busqueda",
            path: "/busqueda"
        },
        // {
        //     label: "alta pelicula ",
        //     path: "/pelicula/alta"
        // },
        {
            label: "peliculas ",
            path: "/pelicula/listado"
        },
        // {
        //     label: "alta actor ",
        //     path: "/actor/alta"
        // },
        {
            label: "actores",
            path: "/actor/listado"
        }
    ]
}
