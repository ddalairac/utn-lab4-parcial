import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../../../models/models';

@Component({
  selector: 'p1-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula
    constructor() { }

    ngOnInit(): void {
    }

}
