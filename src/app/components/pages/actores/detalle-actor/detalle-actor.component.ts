import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { eCollections } from '../../../../models/firebase.model';
import { Actor } from '../../../../models/models';
import { FbStorageService } from '../../../../services/fb-storage.service';

@Component({
    selector: 'p1-detalle-actor',
    templateUrl: './detalle-actor.component.html',
    styleUrls: ['./detalle-actor.component.scss']
})
export class DetalleActorComponent implements OnInit {
    @Input() actor: Actor
    constructor(private fbstorageservice: FbStorageService, private router: Router) { }


    invalidnombre: boolean = false
    invalidapellido: boolean = false
    invalidsexo: boolean = false
    invalidfecha_de_nacimiento: boolean = false
    invalidfoto: boolean = false
    // invalidpais: boolean = false
    paises: any[]
    pais: string
    ngOnInit(): void {
        this.getPaises() 
    }
    
    public getPaises() {
        this.fbstorageservice.get('https://restcountries.eu/rest/v2/region/americas').then(
            (paisesCompleto: any[]) => {
                console.log("paisesCompleto",paisesCompleto)
                this.paises = paisesCompleto.map(pais => {
                    return { flag: pais.flag, name: pais.name }
                })
                console.log("paises F",this.paises)
            }
        )
    }
    
    private validateNewActor(): boolean {
        if (this.actor.nombre == '' || this.actor.nombre == undefined) {
            this.invalidnombre = true
            return false
        }
        if (this.actor.sexo == undefined) {
            this.invalidsexo = true
            return false
        }
        if (this.actor.apellido == '' || this.actor.apellido == undefined) {
            this.invalidapellido = true
            return false
        }
        if (this.actor.fecha_de_nacimiento == '' || this.actor.fecha_de_nacimiento == undefined) {
            this.invalidfecha_de_nacimiento = true
            return false
        }
        if (this.actor.foto == '' || this.actor.foto == undefined) {
            this.invalidfoto = true
            return false
        }
        return true
    }

    
    onDelete(id) {
        this.fbstorageservice.delete(eCollections.actores,id)
    }
    onUpdate(id) {
        this.fbstorageservice.createFromUserId(eCollections.actores,id,this.actor)

    }

}
