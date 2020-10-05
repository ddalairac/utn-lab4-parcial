

export enum eCollections {
    peliculas = "peliculas",
    actores = "actores"
}

export interface iAuthError {
    code: string,
    message: string
}
export enum eAuthEstado {
    valid = "Todo OK",
    userNull = "El email es obligatorio",
    passNull = "La clave es obligatoria",
    userInvalid = "El email es invalido",
    passInvalid = "La clave debe tener mas de 6 caracteres"
}
