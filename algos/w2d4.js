// const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
// const expected1 = [
//   { i: 4, n: 6 },
//   { i: 7, n: 10 },
// ];

// function allNonConsecutive(sortedNums) {
//     let resultsArr =[];
//     for(let i = 0; i < sortedNums.length - 1; i++) {
//         if(sortedNums[i] + 1 !== sortedNums[i + 1]) {
//             resultsArr.push({
//                 i: i + 1,
//                 n: sortedNums[i + 1]
//             })
//         }
//     }
//     return resultsArr;
// }

// console.log(allNonConsecutive(nums1));

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

const nums3 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum3 = -16;
const expected3 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];

function findConsqSums(nums, targetSum) {
    let sum = 0;
    let newArr = [];
    for(i = 0; i < nums.length; i++)    {
        let start = i;
        sum += nums[i];
        if(sum === targetSum)   {
            for(start; start <= i; start++)  {
                var tempArr = [];
                tempArr.push(nums[start]);
            }
            newArr.push(tempArr);
        }
    }
}

console.log(findConsqSums(nums1, sum1));