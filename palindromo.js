/*
    Saber si una palabra es palíndromo o no
*/

function isPalindromo(inputString) {
    const reverse = inputString.split('').reverse().join('');
    return reverse === inputString
}

isPalindromo('aabaa'); // true;
isPalindromo('aaggbaa'); // false