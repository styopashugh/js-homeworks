// function parzTiv(n){
//     for (let i = 2; i < n; i++) {
//         if(n % i ==0){
//                 return false
//         }
//     }
//     return true
// }
// console.log(parzTiv(11));

// function parzTveryCank(n){

//     function parzTiv(x){
//         for (let i = 2; i <x; i++) {
//             if(x % i==0){
//                 return false
//             }

//         }
//         return true
//     }
//     for (let i = 3; i < n; i++) {
//             if(parzTiv(i)){
//                 console.log(i);

//             }

//     }

// }
// parzTveryCank(39)
///////////////////////////////
///////////////////////////////////////

/////////////////////////
///////////////////////////////////////////////////////

const students = [
  { name: "Anna", grade: 85 },
  { name: "Mariam", grade: 92 },
  { name: "Olivia", grade: 76 },
  { name: "Emma", grade: 59 },
];

function getGrateStatus(students) {
  for (const student of students) {
    switch (true) {
      case student.grade >= 90:
        console.log(student.name, "Excellent");
        break;
      case student.grade >= 75:
        console.log(student.name, "Good");
        break;
      case student.grade >= 50:
        console.log(student.name, "Pass");
        break;

      default:
        "Fall";
        break;
    }
  }
}

getGrateStatus(students);
///////////////////////////////////

// const cars = [
//   { model: "Toyota", speed: 100 },
//   { model: "BMW", speed: 150 },
//   { model: "Lada", speed: 80 },
//   { model: "Audi", speed: 130 },
//   { model: "Mercedes-Benz", speed: 260 },
// ];

// const safeCars = [];
// const speedingCars = [];

// for (const car of cars) {
//   if (car.speed > 120) {
//     speedingCars.push(car);
//   } else {
//     safeCars.push(car);
//   }
// }
///////////////////////////////
///////////////////////////////////


