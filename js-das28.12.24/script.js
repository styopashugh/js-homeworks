// const btn1 = document.getElementById("btn1");
// const loadingElement = document.getElementById("loading");
// const successMessage = document.getElementById("succres");
// const errorMessage = document.getElementById("error");

// function greenCardEction(resolve, reject) {
//   loadingElement.innerText = "";
//   let rnd = Math.floor(Math.random() * 10);
//   if (rnd > 5) {
//     resolve("wlcome");
//   } else {
//     console.log("else");
//     reject("try  again");
//   }
// }

// function resolveEtion(resp) {
//   successMessage.innerText = resp;
// }
// function rejectEtion(error) {
//   errorMessage.innerText = error;
// }

// btn1.addEventListener("click", function () {
//   loadingElement.innerText = "Loading....";
//     successMessage.innerHTML =''
//     errorMessage.innerHTML =''
//   setTimeout(() => {
//     greenCardEction(resolveEtion, rejectEtion);
//   }, 1000);
// });



const url ='https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m';

fetch(url)
.then((data)=>{
  console.log(data);
  
  return data.json()
})
.then((info)=>{
   renderData (JSON.stringify( info.current))

  console.log(info);
  
})

function renderData(data){
    const div =document.createElement('div')
    div.textContent =data

    document.body.append(div)
}




