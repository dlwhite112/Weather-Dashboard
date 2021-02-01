// Vars for APIs
var currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=541084353f3ae604f81c495b436c8636&units=imperial'



// User Input City Selection

// Current Weather Results
fetch(currentWeatherUrl)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
    console.log('Fetch Response \n-------------');
    console.log(data.name)
    console.log(data.weather[0].icon)
    console.log('Temperature: ' + data.main.temp + '°F')
    console.log('Humidity: ' + data.main.humidity + '%')
    console.log('Wind Speed: ' + data.wind.speed + ' MPH')
    // lat and lon for UV idex info



    console.log(data.coord)
    // console.log(data.)
  });

//   uv index 
var currentUvUrl = 'https://api.openweathermap.org/data/2.5/uvi?lat=30.26&lon=-97.74&appid=48379efadcfc0735975b5cc0f4e129ce'

fetch(currentUvUrl)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
      console.log('UV Index: ' + data.value)
  })