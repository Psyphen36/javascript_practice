//? create a function addNum(array, num) that takes an array of numbers and returns an array where each number is increased by "num".
// function addNum(array, num) {
//     let increasedNum = [];
//     for (let i = 0; i < array.length; i++) {
//         increasedNum.push(array[i] + num);
//     }
//     return increasedNum;
// }

// const arr = [-2, -1, 0, 99];

// console.log(addNum(arr, 2));

//? Create a function addArrays(array1, array2) that takes 2 arrays of numbers and adds each number in the arrays together.
// function addArrays(array1, array2) {
//     let resArray = [];
//     if (array1.length === array2.length) {
//         for (let i = 0; i < array1.length; i++) {
//             resArray.push(array1[i] + array2[i]);
//         }
//     } else {
//         console.log('Please put both array with same length or same amount of element!!')
//         resArray = null;
//     }
//     return resArray;
// }

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// console.log(addArrays(arr1, arr2));


//? Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than 0.
// function countPositive(nums) {
//     let positives = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] >= 0) {
//             positives.push(nums[i]);
//         }
//     }
//     return positives.length;
// }

// const arr = [-2, 3, -5, 7, 10];
// console.log(countPositive(arr));


//? Create a function minMax(nums) that takes an array of numbers and returns and object with the minimum and maximum numbers in the array.
// function minMax(nums) {
//     let minMax = {};
//     let checker = 0;
    
//     if (nums.length == 0) {
//         minMax['min'] = null;
//         minMax['max'] = null;
        
//     } else if (nums.length == 1) {
//         minMax['min'] = nums;
//         minMax['max'] = nums;

//     } else {
//         for (let i = 0; i < nums.length; i++) {
//             checker = nums[i];
//             if (checker > minMax['max']) {
//                 minMax['max'] = checker;
//             } else if (checker > nums[i+1]) {
//                 minMax['max'] = checker;
//             } else {
//                 minMax['min'] = checker;
//             } 
//         }
//     }
//     return minMax;
// }
    
//     const arr = [-1, -3, 5];
//     const nullArr = [];
//     const singleArrElem = [3];
//     console.log(minMax(arr));


//? Create a function countWords(words) that takes an array of strings and returns an object with how many times each string appeared.
//! Solve later this code isn't working.

// function countWords(words) {
//     let totalWords = {};
//     let sameWords = [];

//     for (let i = 0; i < words.length; i++) {
//         if (words[i-1] === words[i+1]) {
//             console.log(words[i]);
//             sameWords.push(words[i]);
//             // console.log(sameWords)
//             // console.log(sameWords.length)
//             totalWords[words[i]] = sameWords.length;
//         }
//     //     } else if (words[0] !== words[i]) {
//     //         if (words[i] === words[i+1]) 
//     //     }
//     }
//     return totalWords;
// }

// const words = ['apple', 'grape', 'grape', 'apple', 'pineapple', 'grape', 'pineapple'];
// console.log(countWords(words));

//? Create a loop that displays 1 to 20 in the console. If the number is divisible by 3, display 'Fizz' instead of the number. If it's divisible by 5, display 'Buzz' instead. If it's divisible by 3 and 5, display 'FizzBuzz' instead. 

// function fizzBuzz(arr) {
//     console.log(arr.length);
//     for (let i = 1; i <= arr.length; i++) {
//         if ((i % 3 == 0) && (i % 5 == 0)) {
//             console.log('FizzBuzz');
//         } else if (i % 3 == 0) {
//             console.log('Fizz');
//         } else if (i % 5 == 0) {
//             console.log('Buzz');
//         } else {
//             console.log(i);
//         }
//     }
// } 

// const arr = [];
// for (let i = 1; i <= 20; i++) {
//     arr.push(i);
// }
// console.log(arr);
// console.log(fizzBuzz(arr));