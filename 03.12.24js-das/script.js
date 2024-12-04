// const str1 = "react";
// const str2 = "redux";
// let commonCount = 0;
// let checkedChars = "";

// function checkChars(str1, str2) {
//   let count = 0;
//   for (let i = 0; i < str1.length; i++) {
//     let char = str1[i];
//     if (str2.includes(char)) {
//       count++;
//     }

//     console.log(count);
//   }
// }

// checkChars("react", "redux");

//////////////////////////////
// const employees = [
//   {
//     firstName: "Karen",
//     lastName: "Sargsyan",
//     department: "HR",
//     sellery: 133,
//     age: 23,
//   },
//   { firstName: "John", lastName: "Grigoryan", department: "IT", sellery: 3453 },
//   {
//     firstName: "Margarita",
//     lastName: "Ananayan",
//     department: "HR",
//     sellery: 7888,
//   },
//   {
//     firstName: "Aram",
//     lastName: "Virabyan",
//     department: "Finance",
//     sellery: 666,
//   },
//   { firstName: "Nina", lastName: "Saqanyan", department: "IT", sellery: 5555 },
// ];

// function transformUserData(data = []) {
//     const result =[];
//   for (let i = 0; i < data.length; i++) {
//    let {firstName,lastName ,...item} = data[i];
//    result.push({

//     fullName :`${firstName} ${lastName} `,
//     ...item

//    })

//   }
//   console.log(result);
//   return result
// }

// transformUserData(employees);


////////////////////////
//////////////////////////////////////
///////////////////////////////////////

// const foo = (arr) =>
//   arr.map((dataItem) => {
//     const { lastName, firstName, ...other } = dataItem;
//     return {
//       fullName: `${firstName} ${lastName} `,
//       ...item,
//     };
//   });
// console.log(foo(employees));
///////////////////////////////
////////////////////////////////////////





function foo(arr,k){
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] %k ==0){
        console.log(arr.indexOf(arr[i]));
        
      }
      
    }


}

foo([1,14,3,4,5,49,70],2)