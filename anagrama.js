/*
    Dadas 2 cadenas de texto, crear un algoritmo que compruebe si son anagramas entre si.
    Una cadena es un anagrama de otra si usa los mismos caracteres en la misma cantidad.
*/

const orderWord = (word) => {
    return word.replace(/[^\w]/gi, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}

const esAnagrama = (string1, string2) => {
    return orderWord(string1) === orderWord(string2);
}

esAnagrama('frase','fresa'); // true
esAnagrama('perro','fresa'); // false