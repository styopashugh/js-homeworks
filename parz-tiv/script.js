// Дано некоторое число:

// 1357
// Проверьте, что все цифры этого числа являются нечетными.

// let num = 13857;
// let str = num.toString();
// console.log(str);

// function parz(str) {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 2; j < str[i]; j++) {
//       if (str[i] % j == 0) {
//         console.log("parz chen bolory");
//         return false;
//       }
//     }
//   }
//   console.log('parz en bolory');

//   return true;
// }

// console.log(parz(str));

/////////////////////////////////
/////////////////////////////////////////////

// Дано некоторое слово:

// 'abcba'
// Проверьте, что это слово читается одинаково с любой стороны

// let str = "abba";

// function palindrom(str) {
//   if (str === str.split("").reverse().join("")) {
//     console.log("palindrom true");
//     return true;
//   }
//   console.log('no palindorm');
  
//   return false
// }
// palindrom(str);

/////////////////////////
/////////////////////
// Дан массив:

// [
// 	[
// 		[11, 12, 13],
// 		[14, 15, 16],
// 		[17, 17, 19],
// 	],
// 	[
// 		[21, 22, 23],
// 		[24, 25, 26],
// 		[27, 27, 29],
// 	],
// 	[
// 		[31, 32, 33],
// 		[34, 35, 36],
// 		[37, 37, 39],
// 	],
// ]
// Найдите сумму элементов этого массива.

// let arr =[
// 	[
// 		[11, 12, 13],
// 		[14, 15, 16],
// 		[17, 17, 19],
// 	],
// 	[
// 		[21, 22, 23],
// 		[24, 25, 26],
// 		[27, 27, 29],
// 	],
// 	[
// 		[31, 32, 33],
// 		[34, 35, 36],
// 		[37, 37, 39],
// 	],
// ]

// let arr_flat =arr.flat(3)
// console.log(arr_flat);

// let summ =0
// for (let i = 0; i < arr_flat.length; i++) {
//     summ +=arr_flat[i]
    
// }
// console.log(summ);
/////////////////////////////
///////////////////////////////////////////
////////////////////////////////////////////////
// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива:

// [2, 1, 4, 3, 6, 5]

// let arr =[1, 2, 3, 4, 5, 6]


var arr = [1, 2, 3, 4, 5, 6, 7, 8];
let new_arr  =[]

// for (let i = 0; i < arr.length; i+=2) {
//     new_arr.push(arr[i+1])
//     console.log(new_arr);
    
//     new_arr.push(arr[i])
    
// }
// console.log(new_arr);

//2nd method

for (let i = 0; i < arr.length; i+=2) {
    let t =arr[i+1]
    arr[i+1] =arr[i]
    arr[i]=t
    
}
console.log(arr);

