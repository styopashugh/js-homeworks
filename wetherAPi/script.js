const weatherForm =document.querySelector('.weatherForm');
const cityInput =document.querySelector('.cityInput');
const card =document.querySelector('.card');
const apiKey ='65ac655723c5dcb192a6f313787e04ea';

weatherForm.addEventListener("submit" , async event =>{
    event.preventDefault();
    const city =cityInput.value;
    if(city){
        try{
            const weatherData =await getWeatherData(city)
            displayWeatherInfo(weatherData)
        }
        catch(error){
            console.error(error)
            dispalayError(error)
        }
    }else{
        dispalayError("pleas enter a city")
    }

})

async function getWeatherData(city) {
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response =await fetch(apiUrl);
    if(!response.ok){
        throw new Error('could not fetch weather data')
    }
    return await response.json()
    
    
}


function displayWeatherInfo(data){
    console.log(data);
     const {name:city,
            main:{temp,humidity},
            weather:[{description,id}]} =data;
    card.textContent ='';
    card.style.display ='flex';

    const cityDisplay =document.createElement('h1');
    const tempDisplay =document.createElement('p');
    const humidityDisplay =document.createElement('p');
    const descDisplay =document.createElement('p');
    const weatherEmoji =document.createElement('p');

    cityDisplay.textContent =city;
    tempDisplay.textContent =`${temp} K`;
    humidityDisplay.textContent =`humidity:${humidity}`
    cityDisplay.classList.add('cityDisplay')
    tempDisplay.classList.add('tempDisplay')
    humidityDisplay.classList.add('humidityDisplay')

    card.appendChild(cityDisplay)
    card.appendChild(tempDisplay)
    card.appendChild(humidityDisplay)

}

function getWeatherEmoji(wheatherId){

}

function dispalayError(massag) {
    const errorDisplay =document.createElement('p')
    errorDisplay.textContent =massag;
    errorDisplay.classList.add('errorDisplay')

    card.textContent ='';
    card.style.display ='flex';
    card.appendChild(errorDisplay)
}