import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { eCollections } from '../../../../models/firebase.model';
import { Actor } from '../../../../models/models';
import { FbStorageService } from '../../../../services/fb-storage.service';

@Component({
  selector: 'p1-lista-actor',
  templateUrl: './lista-actor.component.html',
  styleUrls: ['./lista-actor.component.scss']
})
export class ListaActorComponent implements OnInit {

  
    constructor(private fbsorageservice: FbStorageService, private router: Router) { }

    ngOnInit(): void {
        this.getActores()
    }

    actores: Actor[]
    actor: Actor
    private getActores() {
        this.fbsorageservice.readAll(eCollections.actores).then(
            (data) => {
                this.actores = data
                // this.actor = data[0]
                console.log("Actores:", this.actores)
            }
        )
    }
    public onSelection(pelicula){
        this.actor = pelicula;
    }
    public onNew(){
        this.router.navigateByUrl('/actor/alta');
    }
    onDetailChange(){
        this.getActores()
    }
}
