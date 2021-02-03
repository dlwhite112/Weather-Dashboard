// Vars for APIs
var currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=541084353f3ae604f81c495b436c8636&units=imperial'

// Vars for Search bar Append
var searchBtn = document.getElementById('submit');
var citySearch = document.getElementById('search');

// // VARS FOR MAIN CARD APPEND
// var mainCardTemp = document.getElementById("mainCardTemp");
// var mainCardHumidity = document.getElementById("mainCardHumidity");
// var mainCardWindSpeed = document.getElementById("mainCardWindSpeed");
// var MainCardUVIndex = document.getElementById("mainCardUVIndex");



// User Input City Selection








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

    // for ( i = 1; i <= 5; i++) {
    //   const element = (data.daily)[i];
      
    //   console.log(element)
      
    // }


    // date (dt timestamp HAVE TO CONVERT THIS TO DAY)

    // DAY 1 FORECAST
    var day1date = document.getElementById("card-body1")
    var day1 = document.createElement('h5');
    var day1icon = document.createElement('p')
        day1icon.textContent = data.daily[1].weather[0].icon;
    var day1Temp = document.createElement('p')
        day1Temp.textContent = 'Temp: ' + data.daily[1].temp.day + '°F';
    var day1Humidity = document.createElement('p')
        day1Humidity.textContent = 'Humidity: ' + data.daily[1].humidity + '%';
    var firstDate = new Date(data.daily[1].dt * 1000);
        dateString1 = firstDate.toGMTString();
        console.log(dateString1);

          day1.textContent = dateString1;
          day1date.appendChild(day1);
          day1date.appendChild(day1icon);
          day1date.appendChild(day1Temp)
          day1date.appendChild(day1Humidity)
         

    // DAY 2 FORCAST
    var day2date = document.getElementById("card-body2")
    var day2 = document.createElement('h5');
    var day2icon = document.createElement('p')
        day2icon.textContent = data.daily[2].weather[0].icon;
    var day2Temp = document.createElement('p')
        day2Temp.textContent = 'Temp: ' + data.daily[2].temp.day + '°F';
    var day2Humidity = document.createElement('p')
        day2Humidity.textContent = 'Humidity: ' + data.daily[2].humidity + '%';
    var firstDate = new Date(data.daily[2].dt * 1000);
        dateString2 = firstDate.toGMTString();
        console.log(dateString2);

          day2.textContent = dateString2;
          day2date.appendChild(day2);
          day2date.appendChild(day2icon);
          day2date.appendChild(day2Temp)
          day2date.appendChild(day2Humidity)

    // DAY 3 FORCAST
    var day3date = document.getElementById("card-body3")
    var day3 = document.createElement('h5');
    var day3icon = document.createElement('p')
        day3icon.textContent = data.daily[3].weather[0].icon;
    var day3Temp = document.createElement('p')
        day3Temp.textContent = 'Temp: ' + data.daily[3].temp.day + '°F';
    var day3Humidity = document.createElement('p')
        day3Humidity.textContent = 'Humidity: ' + data.daily[3].humidity + '%';
    var firstDate = new Date(data.daily[3].dt * 1000);
        dateString3 = firstDate.toGMTString();
        console.log(dateString3);

          day3.textContent = dateString3;
          day3date.appendChild(day3)
          day3date.appendChild(day3icon);
          day3date.appendChild(day3Temp)
          day3date.appendChild(day3Humidity)

    // DAY 4 FORCAST
    var day4date = document.getElementById("card-body4")
    var day4 = document.createElement('h5');
    var day4icon = document.createElement('p')
        day4icon.textContent = data.daily[4].weather[0].icon;
    var day4Temp = document.createElement('p')
        day4Temp.textContent = 'Temp: ' + data.daily[4].temp.day + '°F';
    var day4Humidity = document.createElement('p')
        day4Humidity.textContent = 'Humidity: ' + data.daily[4].humidity + '%';
    var firstDate = new Date(data.daily[4].dt * 1000);
        dateString4 = firstDate.toGMTString();
        console.log(dateString4);

          day4.textContent = dateString4;
          day4date.appendChild(day4)
          day4date.appendChild(day4icon);
          day4date.appendChild(day4Temp)
          day4date.appendChild(day4Humidity)


    // DAY 5 FORCAST
    var day5date = document.getElementById("card-body5")
    var day5 = document.createElement('h5');
    var day5icon = document.createElement('p')
        day5icon.textContent = data.daily[5].weather[0].icon;
    var day5Temp = document.createElement('p')
        day5Temp.textContent = 'Temp: ' + data.daily[5].temp.day + '°F';
    var day5Humidity = document.createElement('p')
        day5Humidity.textContent = 'Humidity: ' + data.daily[5].humidity + '%';
    var firstDate = new Date(data.daily[5].dt * 1000);
        dateString5 = firstDate.toGMTString();
        console.log(dateString5);

          day5.textContent = dateString5;
          day5date.appendChild(day5)
          day5date.appendChild(day5icon);
          day5date.appendChild(day5Temp)
          day5date.appendChild(day5Humidity)



    // icon
    console.log(data.daily[0].weather[0].icon)
    // temp
    console.log('Temperature: ' + data.daily[0].temp.day + '°F')
    // humidity
    console.log('Humidity: ' + data.daily[0].humidity + '%')
})


// searchBtn.addEventListener('click', ;

// console.log('Local Storage Functionality')
// console.log(localStorage)