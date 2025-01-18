// fetch('https://randomuser.me/api/?results=10&page=2')
// .then((resp) =>{

//     return resp.json()
// })
// .then((data)=>{
//     console.log(data);

// })
// .catch((error)=>{
//     console.log(error);

// })

///////////////////
/////////////////////
////////////////////////////////////
// function getCountA(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(10)
//         },3000)
//     })
// }

// function getCountB(){
//     return new Promise((resolve)=>{
//        setTimeout(()=>{
//         resolve(20)
//        },2000)
//     })
// }

// Promise.all([getCountA(),getCountB()])
// .then((resp)=>{
//         console.log(resp[0] +resp[1]);
// })

//////////////////////
//////////////////////////////
////////////////////////////////////////////
// async function result() {

//     const aVelue = await getCountA()
//     const bValue = await getCountB()
//     return aVelue + bValue
// }
// result()
// .then((resp)=>{
//     console.log(resp);

// })

///////////////////////////////////////
import { data } from "./db.js";
const ok = false;
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ok) {
        resolve(data);
      } else {
        reject({ errorMesssage: "wrong API url" });
      }
    }, 3000);
  });
}

const loadingElement = document.getElementById('loading')

async function getUserData() {
  try {
    const resp = await fetchUserData();
    const data = JSON.parse(resp);
    console.log(data);
  } catch (error) {
    console.log(error);
  }finally{
    loadingElement.innerText =''
  }
}

getUserData();

console.log('code endddddd');

