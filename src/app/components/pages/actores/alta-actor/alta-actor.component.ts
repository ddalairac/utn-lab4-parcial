import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { eCollections } from '../../../../models/firebase.model';
import { eTipoPel, Actor } from '../../../../models/models';
import { FbStorageService } from '../../../../services/fb-storage.service';

@Component({
    selector: 'p1-alta-actor',
    templateUrl: './alta-actor.component.html',
    styleUrls: ['./alta-actor.component.scss']
})
export class AltaActorComponent implements OnInit {

    constructor(private fbstorageservice: FbStorageService, private router: Router) { }

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

    nombre: string;
    apellido: string;
    sexo: string;
    fecha_de_nacimiento: string;
    foto: string;

    paises: any[]
    pais: string


    invalidnombre: boolean = false
    invalidapellido: boolean = false
    invalidsexo: boolean = false
    invalidfecha_de_nacimiento: boolean = false
    invalidfoto: boolean = false
    invalidpais: boolean = false


    private validateNewActor(): boolean {
        if (this.nombre == '' || this.nombre == undefined) {
            this.invalidnombre = true
            return false
        }
        if (this.sexo == undefined) {
            this.invalidsexo = true
            return false
        }
        if (this.apellido == '' || this.apellido == undefined) {
            this.invalidapellido = true
            return false
        }
        if (this.fecha_de_nacimiento == '' || this.fecha_de_nacimiento == undefined) {
            this.invalidfecha_de_nacimiento = true
            return false
        }
        if (this.foto == '' || this.foto == undefined) {
            this.invalidfoto = true
            return false
        }
        return true
    }
    public onAceptar() {
        if (this.validateNewActor()) {
            let newActor: Actor = {
                nombre: this.nombre,
                apellido: this.apellido,
                sexo: this.sexo,
                fecha_de_nacimiento: this.fecha_de_nacimiento,
                foto: this.foto,
                pais: this.pais
            }
            this.fbstorageservice.create(eCollections.actores, newActor).then(
                () => {
                    this.router.navigateByUrl('/actor/listado');
                }
            );
        }
    }

    public onPaisSelection(paisObj: any) {
        this.pais = paisObj.name;
    }

}
