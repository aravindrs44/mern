const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

function orderedIntersection(sortedA, sortedB) {

    let resultsArr = []
    // return a new array filled with only the intersecting values, no duplicates
         for (let i = 0; i < sortedB.length; i++)   {
             if(sortedA.includes(sortedB[i]) && resultsArr.includes(sortedB[i]) == false)   {
                 resultsArr.push(sortedB[i]);
             }
         }
    return resultsArr;
}

