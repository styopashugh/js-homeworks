import { ApiKey, API_URL, API_WERSION,ICON_URL } from "./constant.js";

const formElement = document.getElementById("form");
const inputSearch = document.getElementById("inputSearch");
const errorMassage = document.getElementById("errorMassage");
const city =document.getElementById('city');
const country =document.getElementById('country');
const temp =document.getElementById('temp');
const weatherIcon =document.getElementById('weatherIcon');



const renderDataForView = (weatherData) => {
    console.log(weatherData,'dataaaa');
    city.innerText =weatherData.city;
    country.innerText =weatherData.country;
    temp.innerText =weatherData.temp;
    weatherIcon.src =`${ICON_URL}/w/${weatherData.icon}.png`
    
    
};

const clear = () => {
  inputSearch.value = "";
  errorMassage.innerText = "";
};

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = inputSearch.value.trim();
  if (value) {
    fetch(
      `${API_URL}/${API_WERSION}/weather?q=${value}&appId=${ApiKey}&units=metric`
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        clear();
        const dataForView = {
          city: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          country: data.sys.country,
        };
        renderDataForView(dataForView);

        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    errorMassage.innerText = "pleas enter the name";
  }
});
