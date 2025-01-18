import { data } from "./db.js";

const tableBody = document.getElementById("tbody");

const img = document.getElementById("errorMassage");

const userPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rnd = Math.floor(Math.random() * 10);
    if (rnd > 3) {
      resolve(data);
    } else {
      reject(
        "https://cdn.dribbble.com/users/469578/screenshots/2597126/404-drib23.gif"
      );
    }
  }, 1000);
});

userPromise
  .then((resp) => {
    const parsData = JSON.parse(resp);

    return parsData;
  })
  .then((userData) => {
    userData.forEach((user)=>{
        tableBody.innerHTML +=`
            
            <tr>
        
                <td><img src ='${user.picture.large}'></td>
                <td>${user.name.first}</td>
                 <td>${user.name.last}</td>
                  <td>${user.location.city}</td>
                   <td>${user.phone}</td>
            </tr>
        `
        
        
        
    })
  })

  .catch((err) => {
    img.src =err
  });



