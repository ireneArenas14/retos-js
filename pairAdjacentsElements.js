/**
 * 
 * Dado un array de números, encontrar la pareja de elementos adyacentes que tenga el producto más grande y devolver dicho resultado

    Ejemplo
    inputArray = [3, 6, -2, -5, 7, 3], la solución deberia ser:
    solution(inputArray) = 21.
    7 y 3 tienen el producto más largo

*/

function solution(inputArray) {
    let aux = null;
    let response = [];

    for(let i = inputArray.length-1; i>0; i-- ){
        const a = inputArray.splice(i,1);
        response.push(inputArray[i-1]*a);
        aux = a;
    }
    return Math.max(...response)
}

solution([5, 6, -4, 2, 3, 2, -23]); // 30
solution([3, 6, -2, -5, 7, 3]); // 21
solution([1, 0, 1, 0, 1000]); // 0