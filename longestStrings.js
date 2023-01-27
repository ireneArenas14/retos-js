/**

    Given an array of strings, return another array containing all of its longest strings.
    Example

    For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
    solution(inputArray) = ["aba", "vcd", "aba"].

*/

const solution = (inputArray) => {
    let lengthString = 0;
    let order = inputArray.reduce((longest,actual)=> {
        if(!longest) {
            return actual
        }
        return actual.length > longest.length ? actual : longest;
    },'');
    lengthString = order.length;
    return inputArray.filter(string => string.length === lengthString)
}


const inputArray = ["abc", "eeee", "abcd", "dcd"]

solution(inputArray) // ["eeee", "abcd"]
