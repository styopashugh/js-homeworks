
import  {STUDENTS}  from "./students.js";
import { CARS ,MAX_SPEED } from "./cars.js";
console.log(STUDENTS);
console.log(CARS);
  


for (let i = 0; i < CARS.length; i++) {
        if(CARS[i].speed >=MAX_SPEED){
            speedingCars.push(CARS[i])
        }else{
            safeCars.push(CARS[i])
        }
    
}