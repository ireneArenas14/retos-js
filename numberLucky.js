/**
 * 
 * Ticket numbers usually consist of an even number of digits. 
 * A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
    Given a ticket number n, determine if it's lucky or not.

    Example

    For n = 1230, the output should be
    solution(n) = true;
    For n = 239017, the output should be
    solution(n) = false.
 * 
 */

const numberLucky = (n) => {

    const nArr = n.toString().split('');
    const first = nArr.slice(0, nArr.length / 2)
    const second = nArr.slice(nArr.length / 2)
    
    const suma1 = first.reduce((aux,current)=> parseInt(aux)+parseInt(current));
    const suma2 = second.reduce((aux,current)=> parseInt(aux)+parseInt(current));
    return suma1 === suma2;

}

numberLucky(1212); // true