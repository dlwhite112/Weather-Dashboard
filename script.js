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



// User Input City Selection


// Vars for Main Card






// Current Weather Results & Function for main card
fetch(currentWeatherUrl)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // APPEND CITY TO MAIN CARD
    var mainDisplay = document.getElementById("main-weather-display")
    var mainCardCity = document.createElement('h1');
          mainCardCity.textContent = data.name;
    var mainCardData = document.createElement("ul");
    var mainCardTemp = document.createElement('li');
          mainCardTemp.textContent = 'Temperature: ' + data.main.temp + '°F';
    var mainCardHumidity = document.createElement('li');
          mainCardHumidity.textContent = 'Humidity: ' + data.main.humidity + '%';
    var mainCardWindSpeed = document.createElement('li');
          mainCardWindSpeed.textContent = 'Wind Speed: ' + data.wind.speed + ' MPH';
    
      mainDisplay.appendChild(mainCardCity);
      mainDisplay.appendChild(mainCardData);
      mainCardData.appendChild(mainCardTemp);
      mainCardData.appendChild(mainCardHumidity);
      mainCardData.appendChild(mainCardWindSpeed);
      
    // console.log('Fetch Response \n-------------');
    // console.log(data);

   
   
    

    // // APPEND ICON 
    // console.log(data.weather[0].icon)
    // var mainCardIconInput = data.weather[0].icon
    // mainCardHumidity.appendChild(mainCardHumidityInput);
    
 
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

    var mainDisplay = document.getElementById("main-weather-display")
    var mainCardData = document.createElement("ul");
    var mainCardUVIndex = document.createElement('li');
      mainDisplay.appendChild(mainCardData);
    mainCardUVIndex.textContent = 'UV Index: ' + data.value;
      mainCardData.appendChild(mainCardUVIndex)
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