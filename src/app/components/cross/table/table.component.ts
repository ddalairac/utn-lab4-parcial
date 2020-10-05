import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../../models/models';

@Component({
    selector: 'p1-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    @Input() peliculas: Pelicula[];
    @Output() selection: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();
    constructor() { }

    displayedColumns: string[] = ["foto_de_la_película", "nombre", "tipo", "fecha_de_estreno", "cantidad_de_publico", "Acción"];
    ngOnInit(): void {
    }

}
