import { describe, expect, test } from "vitest";
// aca es como que pongo las herramientas para poder hacer el test
import { Cancion } from "../src/cancion"; //aca traigo el codigo original para probar

describe("Cancion", () => { //pruebas que tienen que ver exclusivamente con las canciones

  test("debe crear una canción con su título y duración correctamente", () => { //es el escenario espcif. que vamos a probar
    // 1. Preparar: Creamos una canción de prueba 
    const miCancion = new Cancion("Kickstart My Heart", 243);

    // 2. Afirmar: Comprobamos que el constructor guardó bien los datos
    expect(miCancion.titulo).toBe("Kickstart My Heart");
    expect(miCancion.duracion).toBe(243);
  });

});