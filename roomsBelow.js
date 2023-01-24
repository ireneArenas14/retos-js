
/**
 * 
 * ¡After becoming famous, the CodeBots decided to move into a new building together. 
 * Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! 
 * Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

    Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, 
    your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

    Example:
    matrix = [[0, 1, 1, 2], 
            [0, 5, 0, 0], 
            [2, 0, 3, 3]]
    the output should be
    solution(matrix) = 9.

    example 1
    There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9.

    Note that the free room in the final column makes the full column unsuitable for bots (not just the room directly beneath it). Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9.
*/

const solution = (matrix) => {
    let count = 0;
    let indJ = [];
    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[i].length; j++) {
            if(matrix[i][j] === 0) {
                indJ.push(j);
            }
            else {
                if (matrix[i][j] !== 0 && !indJ.includes(j)) {
                    count+=matrix[i][j];
                }
            }
        }
    }

    return count;

}

const matrix = [[0,1,1,2], [0,5,0,0], [2,0,3,3]]; // 9
const matrix2 = [[1,1,1], [2,2,2], [3,3,3]]; // 18
const matrix3 = [[4,0,1], [10,7,0], [0,0,0], [9,1,2]] // 15

solution(matrix)