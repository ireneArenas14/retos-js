
/**
 * 
 * Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

    A 1-interesting polygon is just a square with a side of length 1. 
    An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. 
    You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
    Example

    For n = 2, the output should be
    solution(n) = 5;
    For n = 3, the output should be
    solution(n) = 13.
 */

const solution = (n) => {
    let centerPolygon = 1;
    let lateralPolygon = 0;
    for(let i= 1; i<n ;i++){
        centerPolygon+=2;
    } 
    for(let i=centerPolygon; i>1 ; i-=2) {
        lateralPolygon+= i-2;
    }
    const totalSum = centerPolygon + (lateralPolygon*2);
    return totalSum;
}

solution(3);