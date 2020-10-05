export class Pelicula {
    id: number;
    nombre: string;
    tipo: eTipoPel;
    fecha_de_estreno: string;
    cantidad_de_publico: number;
    foto_de_la_pelicula: string;
}
export enum eTipoPel {
    terror = "terror",
    comedia = "comedia",
    amor = "amor",
    otros = "otros"
}
