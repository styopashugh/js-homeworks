///exercise 1:
//skzbic ev verjic vercnum e  arajin 3 andamnery
// const makeNewString =(str)=> str < 3 ? str : str.slice(0,3) + str.slice(-3)
// console.log(makeNewString("sdksodgnv12343sgfd123"))

//////////
///exercise 2:
//-----------------

// const frstHalf =(str) =>  str.slice(0 , str.length/2);
// console.log(frstHalf('temp'));
/////////////////////////////////////
/////exercise 3:

// const concat =(str1,str2) => str1.slice(1) +str2.slice(1)
// console.log(concat('abc', 'dgh'));
/////////////
/////exercise 4:

// const closeto100 =(a,b) => (100 -a) <(100-b) ? a :b
// console.log(closeto100(34,55));

////////////////////////////////////////////////////////////////////
///JavaScript Coding Exercises For Beginners: Beginner Exercises Part 3
//Exercise1:

// const countEventNumbers =(arr) =>arr.filter(num =>num %2 ===0).length;

// console.log(countEventNumbers([,1,2,3,4,5,6]));
// console.log(countEventNumbers([2,2,2]));

//Exercise 3:

// const isAscanding = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] < arr[i]) return false;
//   }
//   return true
// };

// console.log(isAscanding([1,2,3,4,5,6]));

// console.log(isAscanding([1,2,4,3,5]))
//////////////////////////////////////////
/////Exercise 4:

// const objA ={a:1 ,b:2 ,c:3};
// const objB ={a:1 ,b:2 ,c:3};
// const objC ={a:1 ,b:2 ,d:3};


// const objEcual  =(a,b) => Object.keys(a).every(kay =>b[key]);
// console.log(objEcual(objA ,objB));
// console.log(objEcual(objA ,objC));
//////////////////////////////////////////
/////Exercise 5:

// const getRndHexNumber  =() =>Math.floor(Math.random() * 16).toString(16)
// console.log(getRndHexNumber());

// const getRndHexColor =() => '#' + Array.from({length :6}).map(getRndHexNumber).join('')
// console.log(getRndHexColor());


//////////////////////////////////////////
let x =10;
 x =20;
console.log(x);
