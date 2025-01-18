////Numbers palindrommm

// const input = 121;

// const input1 = -121;
// const input2 = 10;

// const isPalindromNumber = function (x) {
//   if (x < 0) return false;
//   if (x % 10 === 0) return false;
//   if (x < 10) return true;
//   let rev = 0;

//   while (x > rev) {
//     rev = rev * 10;
//     rev = rev + (x % 10);
//     console.log(rev);
//     x = Math.trunc(x / 10);
//   }
//   return x === rev || x === Math.trunc(rev / 10);
// };

// console.log(isPalindromNumber(input));
// console.log(isPalindromNumber(input1));
// console.log(isPalindromNumber(input2));
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
////UNICE nUMBERS

// const input = [4, 1, 2, 77, 1, 2, 4];

// const singleNumber = function (nums) {
//   let uniq = new Set();
//   let uniqSum = 0;
//   let numSum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const current = nums[i];

//     if (!uniq.has(current)) {
//       uniq.add(current);
//       uniqSum += current;
//       //console.log(uniqSum, "unic");
//     }
//     numSum += current;
//     //console.log(numSum);
//   }
//   return uniqSum * 2 - numSum;
// };

// console.log(singleNumber(input));
//////////////////////////////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////////
//How to remove duplicates from a sorted array?

// const arr1 = [1, 1, 2];
// const arr2 = [4, 6, 8, 4, 1, 1, 3];

// const remuveDuplicat = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   return nums;
// };

// console.log(remuveDuplicat(arr1));
// console.log(remuveDuplicat(arr2));
// console.log(arr2);
////////////////////////////
/////////////////////////////////
//How to remove duplicates from array?
//  const arr2 = [4, 6, 8, 4, 1, 1, 3];

// let a1  =arr2.filter((item,index)=>arr2.indexOf(item) ===index)
// console.log(a1);
/////////////////////////////////////

//How to find two numbers in array that together will give a desired sum? | Sum of Two | JS

// const sumOfTwo  = (arr,target) =>{
//         for (let i = 0; i < arr.length; i++) {
//             for (let j = i+1; j < arr.length; j++) {
//                 if(arr[i] +arr[j] ===target){
// //console.log(arr[i],'i',arr[j] ,'j');

//                 }

//             }

//         }
// }

// console.log(sumOfTwo([2,7,9,11,25,4,9,8,1,12,10,3,33,6,5],7));

//////////  part22222222/////////////////////////////////
//How to find two numbers in array that together will give a desired sum? | Sum of Two | JS

// const sumOfObject = (arr, target) => {
//   const numsObject = {};
//   for (let i = 0; i < arr.length; i++) {
//     numsObject[arr[i]] = i;

//   }
//   for (let i = 0; i < arr.length; i++) {
//     const diff = target - arr[i];
//     if(numsObject[diff] && numsObject[diff] !==i){
//         return [i ,numsObject[diff]]
//     }
//   }
// };

// console.log(sumOfObject([2, 7, 9, 11, 25, 4, 9, 8, 1, 12, 10, 3, 33, 6, 5], 22));
///
//////////////////////////////////////
///JS Tasks: How to find a prime number + How to find all prime numbers up to N | Bute-force and Sieve

// function getPrimes(num) {
//   const sevie = [];
//   const primes = [];

//   for (let i = 2; i <= num; i++) {
//     if (!sevie[i]) {
//       primes.push(i);

//       for (let j = i * i; j <= num; j += i) {
//         sevie[j] = true;
//       }
//     }
//   }
//   return primes;
// }

// console.log(getPrimes(120));
///////////////////////////////////////
///////////////////////////////////////////////////////////////
/////////////////////////////////////////
///Frontend Interview Task: Class Names | JS Solution

// let classNamres = [
//   "header",
//   "menu",
//   "menu-item",
//   "menu-item",
//   "footer",
//   "menu",
//   "link",
//   "link",
//   "link",
//   "link",
// ];

// let classNameCount = {};

// for (let i = 0; i < classNamres.length; i++) {
//   let current = classNamres[i];
//   if (classNameCount[current]) {
//     classNameCount[current] += 1;
//   } else {
//     classNameCount[current] = 1;
//   }

//   let result = Object.keys(classNameCount).sort(
//     (a, b) => classNameCount[b] - classNameCount[a]
//   );

//   console.log(result);
// }

/////////////////
//////////////////////////////////
/////////////////////
//Fibonacci numbers problem. JavaScript solution
function fibonachShort(num) {
  let a = 1,
    b = 1;
  for (let i = 3; i <= num; i++) {
    let c = a + b;
    // a = b;
    // b = c;
    [a,b]=[b,c]
  }
  return b;
}
fibonachShort(10);
console.log(fibonachShort(20));
