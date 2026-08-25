export class Cancion {
    constructor(
        public titulo: string,
        public duracion: number 
    ) {}
//reproducir es el metodo es como la accion.
    reproducir() {
        console.log("Sonando ahora: " + this.titulo);//console.log es como un print el
        // mas ese pega el texto que dice ahi.
    }//this titulo es como que trae el nombre de la cancion que esta sonando.

}