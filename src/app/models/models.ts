export class Pelicula {
    id?: number;
    nombre: string;
    tipo: eTipoPel;
    fecha_de_estreno: string;
    cantidad_de_publico: number;
    foto_de_la_pelicula: string;
    actor?: string;
}
export class Actor {
    id?: number;
    nombre: string;
    apellido: string;
    sexo: string;
    fecha_de_nacimiento: string;
    foto: string;
    pais?:string
}
export enum eTipoPel {
    terror = "terror",
    comedia = "comedia",
    amor = "amor",
    otros = "otros"
}
