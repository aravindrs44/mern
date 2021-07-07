const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function selectionSort(nums)    {

    for (let i = nums.length - 1; i > 1; i--)   {
        let max = nums[0];
        let position = 0;
        for (let j = 0; j < i; j++) {
            if (max < nums[j + 1]) {
                max = nums[j + 1];
                position = j + 1;
                // console.log(max);
                // console.log(position);
            }
        nums[position] = nums[i];
        nums[i] = max
        }
    }
    return nums
}

console.log(selectionSort(numsRandomOrder));
