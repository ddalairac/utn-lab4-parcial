import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { eCollections } from '../../../../models/firebase.model';
import { Actor, eTipoPel, Pelicula } from '../../../../models/models';
import { FbStorageService } from '../../../../services/fb-storage.service';

@Component({
    selector: 'p1-alta-pelicula',
    templateUrl: './alta-pelicula.component.html',
    styles: [
    ]
})
export class AltaPeliculaComponent implements OnInit {

    constructor(private fbstorageservice: FbStorageService, private router: Router) { }

    ngOnInit(): void {
        this.getActores()
    }
    nombre: string;
    tipo: eTipoPel;
    fecha_de_estreno: string;
    cantidad_de_publico: number;
    foto_de_la_pelicula: string;
    
    actores: Actor[]
    actor: string


    invalidnombre: boolean = false
    invalidtipo: boolean = false
    invalidfecha_de_estreno: boolean = false
    invalidcantidad_de_publico: boolean = false
    invalidfoto_de_la_pelicula: boolean = false
    invalidactor: boolean = false


    private validateNewMovie(): boolean {
        if (this.nombre == '' || this.nombre == undefined) {
            this.invalidnombre = true
            return false
        }
        if (this.tipo == undefined) {
            this.invalidtipo = true
            return false
        }
        if (this.fecha_de_estreno == '' || this.fecha_de_estreno == undefined) {
            this.invalidfecha_de_estreno = true
            return false
        }
        if (this.cantidad_de_publico == 0 || this.cantidad_de_publico == undefined) {
            this.invalidcantidad_de_publico = true
            return false
        }
        if (this.foto_de_la_pelicula == '' || this.foto_de_la_pelicula == undefined) {
            this.invalidfoto_de_la_pelicula = true
            return false
        }
        return true
    }
    public onAceptar(){
        if (this.validateNewMovie()) {
            let newPelicula: Pelicula = {
                nombre: this.nombre,
                tipo: this.tipo,
                fecha_de_estreno: this.fecha_de_estreno,
                cantidad_de_publico: this.cantidad_de_publico,
                foto_de_la_pelicula: this.foto_de_la_pelicula,
                actor: this.actor
            }
            this.fbstorageservice.create(eCollections.peliculas, newPelicula).then(
                ()=>{
                    this.router.navigateByUrl('/pelicula/listado');}
            );
        }
    }

    private getActores() {
        this.fbstorageservice.readAll(eCollections.actores).then(
            (data) => {
                this.actores = data
                // this.actor = data[0]
                console.log("Actores:", this.actores)
            }
        )
    }
    public onActorSelection(actorObj:Actor){
        this.actor = actorObj.apellido+", "+actorObj.nombre;
    }

}
