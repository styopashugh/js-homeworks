import { countryCurrencies } from "./constants.js";
import { findData } from "./helpers.js";

// const result =findData(countryCurrencies,(item)=>{
//         return item.currency.symbol ==="€"
// })

// console.log(result,'result');


// console.log('script start');

// setTimeout(()=>{console.log('code5000');
// },3000)


// console.log('script2');

// setTimeout(()=>{console.log('code2000');
// },2000)

// console.log('scrit end');



function myCustomFetch(resolve,reject){
            console.log('loadingg.....');
          
            
            setTimeout(()=>{
                    const rnd =Math.floor(Math.random()*10)
                    if(rnd >5){
                        resolve(countryCurrencies)
                    }else{ reject('oops')}
            },3000)
}


function resolveFunction(data){
    console.table(data);
    
}

function rejectFunction(error){
    console.error(error)
}


myCustomFetch(resolveFunction,rejectFunction)