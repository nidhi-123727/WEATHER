const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');

const discription = document.querySelector('.discription');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

 async function checkWeather(city){
    const api_key = "b1e5ba148f33d7acbef77ce41a0d3314";
    
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;


     
     const weather_data = await fetch(url).then((response) => response.json());

    


      if(weather_data.cod===`404`){
         console.log("error");
         return;
      }

      temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}<sup>°C</sup>`;
      discription.innerHTML = weather_data.weather[0].description;
      humidity.innerHTML = `${weather_data.main.humidity}%`;
      wind_speed.innerHTML = `${weather_data.wind.speed} km/H`;


    // temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    // discription.innerHTML = `${weather_data.weather[0].description}`;

    //  humidity.innerHTML = ` ${weather_data.main.humidity} % ` ;
    //  wind_speed.innerHTML = `${weather_data.wind.speed} km/H`;

          switch (weather_data.weather[0].main) {
            case 'Clouds':
                weather_img.src = "assets/cloud.png";
                break;
            case 'Clear':
                weather_img.src = "assets/clear.png";
                break;
            case 'Haze':
                weather_img.src = "assets/haze.png";
                break;
            case 'Mist':
                weather_img.src = "assets/mist.png";
                break;
            case 'Rain':
                weather_img.src = "assets/rain.png";
                break;
            case 'Snow':
                weather_img.src = "assets/snow.png";
                break;
                 default:
           weather_img.src = "assets/default.png";
           break;

        }
        
    }
    




 searchBtn.addEventListener('click',()=>{
     checkWeather(inputBox.value);
});




















