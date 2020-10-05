import { Component, OnInit } from '@angular/core';
import { eCollections } from '../../../../models/firebase.model';
import { Pelicula } from '../../../../models/models';
import { FbStorageService } from '../../../../services/fb-storage.service';

@Component({
  selector: 'p1-lista-pelicula',
  templateUrl: './lista-pelicula.component.html',
  styleUrls: ['./lista-pelicula.component.scss']
})
export class ListaPeliculaComponent implements OnInit {

 
    constructor(private fbsorageservice: FbStorageService,) { }

    ngOnInit(): void {
        this.getMovies()
    }

    peliculas: Pelicula[]
    pelicula: Pelicula
    private getMovies() {
        this.fbsorageservice.readAll(eCollections.peliculas).then(
            (data) => {
                this.peliculas = data
                // this.pelicula = data[0]
                console.log("Peliculas:", this.peliculas)
            }
        )
    }
    public onSelection(pelicula){
        this.pelicula = pelicula;
    }
}
