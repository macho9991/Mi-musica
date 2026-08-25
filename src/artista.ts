import {Album} from './album'

export class Artista {
public albumes: Album[] = [];
    constructor(
        public nombre: string,
        public oyentes: number,
        public acercaDe: string
    ) {}
    lanzarAlbum(album:Album): void {
       this.albumes.push(album);
          
    }
}