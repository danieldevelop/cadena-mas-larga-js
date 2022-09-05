function palabraMasLarga(cadena) {
    /**
     * La función llamada 'palabraMasLarga' recibe como argumento una frase (string)
     * y devuelve la palabra mas larga de la frase, es decir, la palabra que contiene
     * la mayor cantidad de caracteres.
     * todo: Ejemplo de entrada: 
     * todo:    'Ayer fui a pasear a una plaza' debe retornar 'pasear'
     * todo:    'Me gusta mucho javascript' debe retornar 'javascript'
     * * Tip: podes usar el método 'split'
     */

    const palabras = cadena.split(' ');
    let primeraPalabra = palabras[0]; // Guardamos la primera palabra para compararla con las demás

    for (let i=0; i<=(palabras.length - 1); i++) {
        if (palabras[i].length > primeraPalabra.length) {
            primeraPalabra = palabras[i];
        }
    }

    return primeraPalabra;
}

const primeraFrase = 'Ayer fui a pasear a una plaza';
const segundaFrase = 'Me gusta mucho javascript';

console.log(palabraMasLarga(primeraFrase));