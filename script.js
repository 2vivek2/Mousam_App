const apiKey = "3d724c253425540c4c5179651114d53e"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const cityNameSearch = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weatherIcon');


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json()

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = 'images/cloud.png'
    } else if (data.weather[0].main == "Clear"){
        weatherIcon.src = 'images/clear.png'
    } else if (data.weather[0].main == "Rain"){
        weatherIcon.src = 'images/rain.png'

    }else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = 'images/drizzle.png'

    }

    }


searchBtn.addEventListener('click', ()=>{
    checkWeather(cityNameSearch.value);
})

