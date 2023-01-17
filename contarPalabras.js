/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

countWords = (cadena) => {
    const recuento = [];
    const cadenaSinSignos = cadena.replace(/[^\w\s]/gi, '').toLowerCase().split(' ')
    cadenaSinSignos.map(palabra => {
        if(!recuento[palabra]) {
            recuento[palabra] = 1
        } else {
            recuento[palabra]++;
        }
        
    })
    return recuento;
}

countWords("Hola. Esto es una cadena para contar palabras repetidas. Hay dos palabras repetidas")