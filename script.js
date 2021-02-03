// Vars for APIs
var currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=541084353f3ae604f81c495b436c8636&units=imperial'

// Vars for Search bar Append
var searchBtn = document.getElementById('submit');
var citySearch = document.getElementById('search');

// VARS FOR MAIN CARD APPEND
var mainCardTemp = document.getElementById("mainCardTemp");
var mainCardHumidity = document.getElementById("mainCardHumidity");
var mainCardWindSpeed = document.getElementById("mainCardWindSpeed");
var MainCardUVIndex = document.getElementById("mainCardUVIndex");
var mainCardCity = document.getElementById("mainCardCity");


// User Input City Selection

// Current Weather Results & Function for main card
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

  //   5 day forecast try 1 
// var fiveDayUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Austin&appid=541084353f3ae604f81c495b436c8636&units=imperial'

// fetch(fiveDayUrl)
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     console.log('Fetch Response for the 5 day \n--------------')
//     console.log(data.list[3,]);
// })

// 5 day forecast try 2
var fiveDayUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=30.26&lon=-97.74&exclude=minutely,hourly,alerts,current&appid=541084353f3ae604f81c495b436c8636&units=imperial'

fetch(fiveDayUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
  // WILL HAVE TO LOOP THROUGH THIS FOR 5 DAYS
    console.log('Fetch Response for the 5 day \n--------------')
    // date (dt timestamp HAVE TO CONVERT THIS TO DAY)
    console.log(data.daily[0].dt)
    // icon
    console.log(data.daily[0].weather[0].icon)
    // temp
    console.log('Temperature: ' + data.daily[0].temp.day + '°F')
    // humidity
    console.log('Humidity: ' + data.daily[0].humidity + '%')
})


// searchBtn.addEventListener('click', ;

console.log('Local Storage Functionality')
console.log(localStorage)