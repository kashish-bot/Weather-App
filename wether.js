const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('search');
const weatherImg = document.querySelector('.cloudy');
const temprature = document.querySelector('.temprature');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity1');
const windSpeed = document.querySelector('.wind2');
const uncatched = document.querySelector('.location-not-found')
const weatherBody = document.querySelector('.weather-body')

async function checkWeather(city){
    const api = "c9adfaaa76ced44af4e4ca711d601e82";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

    const weather_data = await fetch(`${url}`).then(Response => Response.json());

    console.log(weather_data)

    if (weather_data.cod === '404') {
        uncatched.style.display = 'flex'
        weatherBody.style.display = 'none'
        console.log('ERROR: Something went wrong');
        return;
    }
    uncatched.style.display = 'none'
    weatherBody.style.display = 'flex'
    temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
    description.innerHTML = `${weather_data.weather[0].description}`

    humidity.innerHTML =`${weather_data.main.humidity}%`
    windSpeed.innerHTML = `${weather_data.wind.speed}km/h`

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weatherImg.src = "cloud.png";
            break;
        case 'Clear':
            weatherImg.src = "clear.png";
            break;
        case 'Rain':
            weatherImg.src = "rain.png";
            break;
        case 'Mist':
            weatherImg.src = "mist.png";
            break;
        case 'Snow':
            weatherImg.src = "snow.png";
            break;
        case 'clouds':
            weatherImg.src = "cloud.png";
            break;
        default:
            break;
    }
}

searchBtn.addEventListener('click' , () => {
    checkWeather(inputBox.value)
})








