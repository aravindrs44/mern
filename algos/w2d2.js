function diagonalDifference(sqrMatrix) {
    let left = 0;
    let right = 0;
    for(let i = 0; i < sqrMatrix.length; i++)  {
        left += sqrMatrix[i][i];
        right += sqrMatrix[i][sqrMatrix.length - i - 1];
    }
    let diff = left - right;
    diff = Math.abs(diff);
    return diff;
}

const squareMatrix1 = [
[1, 2, 3],
[4, 5, 6],
[9, 8, 9],
];

const squareMatrix2 = [
[1, 2, 3, 4, 5],
[1, 2, 3, 4, 5],
[1, 2, 3, 4, 5],
[1, 2, 3, 4, 5],
[1, 2, 3, 4, 5],
];

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));

