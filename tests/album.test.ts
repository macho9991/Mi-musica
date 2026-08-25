    import { describe, expect, test } from "vitest";//aca como que saco las herraientas para hacer la prueba
import { Album } from "../src/album";
import { Cancion } from "../src/cancion"; // esos dos import es como que traigo el codigo que utiluzo para el test

describe("Album", () => { //basicamente me dice que todo lo que pasa aca es solo del album
  
  test("debe crear un álbum y permitir agregarle canciones", () => { //es como el escenario que voy a usar
    
    const miAlbum = new Album("Dr. Feelgood", 1989);//es como que creamos el nombre del album en la memoria
    const miCancion = new Cancion("NO LES DA CF", 243);//creo la cancion

    miAlbum.agregarCancion(miCancion);//es como que busca la cancion en el album

    expect(miAlbum.titulo).toBe("Dr. Feelgood");//verificacion que el constructor haya guardado bien el nombre

    expect(miAlbum.anio).toBe(1989);
    
    expect(miAlbum.canciones.length).toBe(1);//medimos el arreglo el .length me dice la cantidad de elementos que tiene la lista

    expect(miAlbum.canciones[0].titulo).toBe("NO LES DA CF");
    //nos metemos a la posición [0] del álbum y
    // miramos esa primera canción y confirmamos que sea exactamente la que le habíamos ensamblado
  });

});