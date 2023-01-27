/**
 * Some people are standing in a row in a park. There are trees between them which cannot be moved. 
    Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
    Example

    For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
    solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

    If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.
*/

const sorthByHeight = (arr) => {

    const auxArr = arr.filter(n => n !== -1).sort((a, b) => a - b);
    let n = 0;
    for(let i= 0; i<arr.length; i++){
        if(arr[i] !== -1) {
            arr[i] = auxArr[n]
            n++;
        }
        
    }
    return arr;
}

sorthByHeight([-1, 150, 190, 170, -1, -1, 160, 180]); // [-1, 150, 160, 170, -1, -1, 180, 190]