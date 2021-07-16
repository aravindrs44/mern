
/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;

// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
const expected1 = [0, 2];

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */

const nums1 = [2, 11, 7, 15, -2];
const targetSum1 = 9;

// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
const expected1 = [0, 2];

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */

function twoSum(nums, targetSum) {
  // a + b = c
  // 9 - 2 = b
  var idx = 0;
  var dict = {};
  var results = [];


  while (idx < nums.length) {
    let b = targetSum - nums[idx]
    if (dict[b] == undefined) {
      dict[nums[idx]] = idx
    }
    else if (dict[b] != undefined) {
      console.log(true)
      results.push([dict[b], idx]);

    }
    idx++
  }
  return results;

}

function twoSumWithoutDict(num, targetSum) {
  let left = 0;
  let right = 1;
  let resultsArr = [];

  while (left < num.length) {
    if (num[left] + num[right] === targetSum) {
      return resultsArr.push(left, right);
    } else {
      right++;
    }

    if (right === num.length - 1) {
      left += 1;
      right = left + 1;
    }
  }
  return resultsArr;
}





function twoSumRossStyle(nums, targetSum) {
    let i=0;
    let j=1;
    while(i<nums.length-1){
        if((nums[i]+nums[j])==targetSum){
            return [i,j];
        }
        if(j<nums.length-1){
            j++;
        } else {
            i++;
            j=i+1;
        }
    }
    return false;
}


function twoSumDictOWO(nums, targetSum) {
    let dict = {};
    let results = [];
    for (let i = 0; i < nums.length; i++){
      if(dict[targetSum-nums[i]] === undefined){
        dict[nums[i]]=i
      }
      else{
        results.push ([dict[targetSum-nums[i]], i])
      }
    }
    return results
}


/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
const expected3 = [1, 2, 3];
/* 
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */

function kMostFrequent(nums, k) {
  let dict = {}
  for (let i = 0; i < nums.length; i++) {
    dict[nums[i]] = dict[nums[i]] ? dict[nums[i]] + 1 : 1
  }


  let results = [];
  console.log(dict);
  for (let i = 1; i <= k; i++) {
    let max = undefined;
    for (let key in dict) {
      if (max === undefined || dict[max] < dict[key]) {
        max = key
      }
    }
    results.push(max)
    dict[max] = 0
  }
  return results

}


function kMostFrequent(nums, k) {
    numObj={};
    for(let i=0; i<nums.length; i++){
        if(i in numObj){
            numObj[i]+=1;
        } else {
            numObj[i]=1;
        }
    }
    let results=[]
    let j = 0;
    while(j<k){
        let val=null;
        for(let key in numObj){
            if(val==null || numObj[key]>numObj[val]){
                val=key;
            }
        }
        results.push(parseInt(val));
        numObj[val]=0;
        j++;
    }
    return results;
}



console.log(kMostFrequent(nums1, k1))
console.log(kMostFrequent(nums2, k2))
console.log(kMostFrequent(nums3, k3))



