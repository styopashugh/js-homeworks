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

// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_arr  =[]

// for (let i = 0; i < arr.length; i+=2) {
//     new_arr.push(arr[i+1])
//     console.log(new_arr);

//     new_arr.push(arr[i])

// }
// console.log(new_arr);
///////////////////////////////////////
/////////////////////////////////////////////////2nd method

// for (let i = 0; i < arr.length; i+=2) {
//     let t =arr[i+1]
//     arr[i+1] =arr[i]
//     arr[i]=t

// }
// console.log(arr);

////////////////////////////////////////////
/////////////////////////////////////////////////////
// 1)Հաշվի առնելով տողերի զանգվածը, որտեղ կան տարբեր «length» ունեցող
// string տողեր: վերադարձրեք մեկ այլ զանգված,որը պարունակում է
// ամենաերկար տողերը: այսինքն նոր Array-ում push լինի ամենաերկար length
// ունեցող string տողեր-ը
// const arr =  ["Aram", "Davit", "Hovhannes","Vardan"]
// այս օրինակում պետք է push լինի միայն ‘Hovhannes’
//  const arr =   ["aba", "aa", "ad", "vcd", "aba"]
// իսկ այս դեպքում պետք է push լինի //["aba", "vcd", "aba"]

// const arr = ["Aram", "Davit", "Hovhannes", "Vardan", "Hovhannes"];
// const minValue =Math.min(...arr)

// let max_length = arr[0].length;
// let newArr = [arr[0]];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i].length === max_length) {
//     newArr.push(arr[i]);
//   } else if (arr[i].length > max_length) {
//     newArr = [arr[i]];
//     max_length = arr[i].length;
//   }
// }

// console.log(newArr);

///////////////////////
///////////////////////
// const arr = [true, NaN, "Hello", 3, false, "JavaScript", 8, NaN];

// function checkTyps() {
//   let boo = [];
//   let num = [];
//   let str = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number" && !isNaN( arr[i]) ) {
//       num.push(arr[i]);
//     } else if (typeof arr[i] == 'boolean') {
//       boo.push(arr[i]);
//     } else if (typeof arr[i] == "string") {
//       str.push(arr[i]);
//     }
//   }
//   console.log(boo ,'bool');
//   console.log(num ,'num');
//   console.log(str,'str');

// }
// checkTyps(arr)
/////////////////////////////
//////////////////////////////////

// let arr = [4, 8, 3, 12, 9, 20];

// let sortArr = arr.sort((a, b) => a - b);
// console.log(sortArr);
// let maxValue = Math.max(...arr);
// let minValue = Math.min(...arr);
// console.log(maxValue);
// console.log(minValue);
// let newArr = [];
//////////////////////////////
// let count = 0;
// count = maxValue - minValue - arr.length;
// console.log(count);
//////////////////////////////
// let x = [];
// for (let i = minValue + 1; i < maxValue; i++) {
//   if (!arr.includes(i)) {
//     x.push(i);
//   }
// }
// console.log(x);
//////////////////////////////////

// let arr = [4, 8, 3, 12, 9, 20];
// function sort(arr) {
//   let minVaIndex = 0;
//   let maxVal = arr[0];
//   let newArr = [];
//   for (let j = 0; j < arr.length; j++) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < arr[minVaIndex]) {
//         minVaIndex = i;
//       }
//     }
//     newArr.push(arr[minVaIndex]);
//     arr.splice(minVaIndex, 1);
//     minVaIndex = 0;
//     j--;
//   }

//   console.log(newArr);
// }

// sort(arr);
//////////////////////////////
/////////////////////////
///
//hamematel 2 zangvacner [1,2,3] [2,1,3]

// let arr = [1, 3, 2];
// let arr1 = [2, 1, 3];

// const compearArray = (a, b) => {
//   let sort_A = a.sort((a, b) => a - b);
//   let sort_B = b.sort((a, b) => a - b);

//    if ( sort_A.length !==sort_B.length) {
//         console.log('don`t have the same length');
//         return

//    }

//     for (let i = 0; i < sort_A.length; i++) {
//       for (let j = 0; j < sort_B.length; j++) {
//         console.log(sort_A[i],'sortA ');
//         console.log(sort_B[j], 'sortB');

//         if (!sort_A.includes(sort_B[j])) {
//             return false
//         }
//       }

//     }
//     return true

//   }

// console.log(compearArray(arr, arr1));
/////////////////////////////////////////////////////
//////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////
//search users with names

// const searchUser = (param) => {
//     let paramValue =param.toLowerCase()
//     console.log(paramValue);

//   const users= [
//     { firstName: "Davit", lastName: "Karapetyan", age: 5 },
//     { firstName: "Ani", lastName: "Grigoryan", age: 20 },
//     { firstName: "Anna", lastName: "Mangasryan", age: 15 },
//     { firstName: "Grig", lastName: "Grigoryan", age: 20 },
//     { firstName: "Rafo", lastName: "Safaryan", age: 44 },
//     { firstName: "Aram", lastName: "Ginosyan", age: 55 },
//   ];
//   let filterResult = [];

// users.filter(user =>user.firstName ==param)
// filterResult.push(users.filter(user =>user.firstName ==param ))

//     for (let i = 0; i < users.length; i++) {
//         let name =users[i].firstName.toLowerCase()
//         if(name.includes(paramValue)){
//             filterResult.push(users[i])
//         }
//     }
// console.log(filterResult);

// };
// searchUser("r")
// /////////////////////////////////////
////////////////////////////////////////
///////////////////////////////////////////////////////

// let obj = {
//   1: {
//     1: {
//       1: 111,
//       2: 112,
//       3: 113,
//     },
//     2: {
//       1: 121,
//       2: 122,
//       3: 123,
//     },
//   },
//   2: {
//     1: {
//       1: 211,
//       2: 212,
//       3: 213,
//     },
//     2: {
//       1: 221,
//       2: 222,
//       3: 223,
//     },
//   },
//   3: {
//     1: {
//       1: 311,
//       2: 312,
//       3: 313,
//     },
//     2: {
//       1: 321,
//       2: 322,
//       3: 323,
//     },
//   },
// };
//Найдите сумму элементов этого объекта.

// let sum = 0;

// function summOfObject(ob) {
//   for (let elem in ob) {
//     let value = ob[elem];
//     if (typeof value == "object") {
//       summOfObject(value);
//     } else {
//       sum += value;

//     }
//   }
// }

// summOfObject(obj);
// console.log(sum);
/////////////////////////
////////////////////////////
// Дано число, например, вот такое:

// let num = 12345;
// Проверьте, что все цифры этого числа больше нуля

// let num =12305

// let stringNum =String(num)
// console.log(stringNum);
// let splitNum =stringNum.split('')
// console.log(splitNum);
// for (let i = 0; i < splitNum.length; i++) {
//     if(splitNum[i] >0){
//       console.log('+++++');

//     }else{
//       console.log('-----');

//     }

// }
/////////////////////////////
/////////////////////////////////////
////////////////////////////////

// Дан некоторый массив, например, вот такой:

// [123, 456, 789]
// Слейте все элементы этого массива в один массив, разбив их посимвольно:

// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let arr = [123, 456, 789];
// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//   arr1.push(..."" + arr[i]);

// }
// console.log(arr1);
// console.log(arr1.map(Number));
////////////////////////////////////
////////////////////////////////////////////////////////////
//////////////////////////////////////

// Дан следующая структура:

// let data = [
// 	{
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	{
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	{
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// ];
// Найдите сумму элементов этой структуры.
// let sum =0
// for( let elem in data){
//   //console.log(data[elem]);
//   for (let i in data[elem]){
//    // console.log(data[elem][i]);
//     sum+=data[elem][i]
//   }

// }
// console.log(sum);
/////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////////////////
// Дана строка. Проверьте, что эта строка состоит только из цифр.

// let str = '123345998989898'
// let splitStr =str.split('')
// console.log(splitStr);

// for (let i = 0; i < splitStr.length; i++) {
//             if(!isNaN(splitStr[i])){
//                 console.log('all numbers');

//             }else {console.log('no numbers') ;break}

// }
/////////////////////////////
///////////////////////////////////////////
/////////////////////////////////////////////////////

// Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

// let arr =[1,3,55,30,45,10111110,250,20,66,901110081,78750,50000000]

// let count = 0;
// let zeroCount = 0;
//  const isCorect =(num,numType) =>{
//     let strNum =num.toString().split('');
//     let countOfZero =0
//     strNum.forEach((t)=>{
//         countOfZero += (t == numType ? 1 : 0)
//         // if(t ==0){
//         //     countOfZero =countOfZero+1
//         // }else {countOfZero= countOfZero+0}

//     })
//     return countOfZero>1
//  }
//  const zeroFilter =(num)=> !isCorect(num,0)
//  const oneFilter =(num)=> !isCorect(num,1)
// let filteredArr  =arr.filter(oneFilter)

// console.log(filteredArr);

// for (let i = 0; i < arr.length; i++) {
//     let strNum =arr[i].toString().split('');
//     console.log(strNum);
//         for (let j = 0; j < strNum.length; j++) {
//             console.log(strNum[j]);
//             if(strNum[j] ==0){
//                 zeroCount++

//                     if(zeroCount>2){
//                         let delite =arr.splice(arr[i],1)

//                         console.log(delite ,'fjweiferin');

//                     }
//                 zeroCount =0

//             }

//         }

// }
//console.log(count);
////////////////////////////////////////
/////////////////////////////////////////////
//////////////////////////////////////////////////

// Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.
// let arr = [1,2,4,7,88]

// function duble(arr){
//    arr.map((elm)=>{
//     arr.push(elm)
//    })
//         console.log(arr);

// }
// duble(arr)
//////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
//Дан массив и число. Оставьте в массиве только те числа,
// которые являются делителями заданного числа.

// let arr =[2,345,7,8,99,4,15,26,25,70,44,]
// let newArr =[]
// function divisor(arr,x){
//      for (let i = 0; i < arr.length; i++) {
//             if(arr[i] %x !=0){
//                 newArr.push(arr[i])
//             }

//      }

// }
// console.log(newArr);

// divisor(arr,2)

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word ,i,words) => {
//     console.log(word,i,words);
//     return true

// });
///////////////////////////
////////////////////////////////////
//////////////////////////////////
///SHUFFLE//////////////////////
// let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let shuffle = function (arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
    
//     let tmp = arr[i];
//     let rnd = Math.floor(Math.random() * (i + 1));
//     arr[i] = arr[rnd];
//     arr[rnd] = tmp;710170
//   }
//   return arr;
// };

// for (let i = 0; i < 10; i++) {
//   console.log(shuffle(input).join(","));
// }
//////////////////////////////////////////////////////