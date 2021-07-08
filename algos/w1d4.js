arr1 = [1, 5, 4, 9, 7, 6, 3, 2, 8, 10];
arr2 = [11, 4, 20, 2, 13, 14, 3, 1];
arr3 = [1, 14, 13, 20, 18, 8, 15, 3];
arr4 = [9, 19, 4, 13, 16, 1, 3, 12];
arr5 = [3, 7, 14, 13, 16, 12, 6, 15];
arr6 = [3, 6, 8, 16, 20, 7, 12, 10];
arr7 = [-1, 9, -5, -6, 19, 0, -8, 10];
arr8 = [8, -10, 0, 7, -9, 4, 13, -5];
arr9 = [14, 4, 17, 8, 15, 13, -5, 5];
arr10 = [18, -10, 8, -6, 5, 17, -2, 6];
arr11 = [17, 4, -6, -4, -1, 3, 8, 5];



function insertionSort(arr)  {
    for (i = 1; i <= arr.length - 1; i++)    {
        let j = i;
        while (j >= 0 && arr[j] < arr[j - 1])    {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }
    return arr;
}

// console.log(insertionSort(arr1));
// console.log(insertionSort(arr2));
// console.log(insertionSort(arr3));
// console.log(insertionSort(arr4));
// console.log(insertionSort(arr5));
// console.log(insertionSort(arr6));
console.log(insertionSort(arr7));
console.log(insertionSort(arr8));
console.log(insertionSort(arr9));
console.log(insertionSort(arr10));
console.log(insertionSort(arr11));