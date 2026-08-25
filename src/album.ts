import { Cancion } from './cancion';

export class Album {
    // La propiedad va adentro de la clase, antes o después del constructor
    public canciones: Cancion[] = [];

    constructor(
        public titulo: string,
        public anio: number
    ) {}

    // este metodo suma canciones al album
    agregarCancion(cancion: Cancion): void {
        this.canciones.push(cancion);
    }
}