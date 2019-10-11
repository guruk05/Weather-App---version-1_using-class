
const key = '2ebbc925a11c3ea05fe72bb48f8ad49d'; 

function getWeather(city) {  
  let cityName = document.getElementById("cityName").value; // Getting user search values
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key) // Fetching weather data using openweathermap api key
    .then(function (resp) {
      return resp.json()
    }) // Convert data to json
    .then(function (data) {
      // console.log(data);
      drawWeather(data); 
    })
    .catch(function () {
    });
}


function drawWeather(d) {
  let celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  let description = d.weather[0].description;
  let country = d.sys.country;

// Displaying weather data 

  document.getElementById('showDescription').innerHTML = description;
  document.getElementById('showDegree').innerHTML = celcius  
  document.getElementById('showCity').innerHTML = d.name;
  document.getElementById('showCountry').innerHTML = country;

// Displaying fahrenheit data 

  $('.Celsius').on('click', function () {
        let fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
        console.log(fahrenheit);
        document.getElementById('showDegree').innerHTML = fahrenheit;
        document.getElementById('showFahrenheit').innerHTML = '&deg;' + 'F';
  });
  
// Displaying celcius data 

        $('#showFahrenheit').dblclick(function() {
        let celcius = Math.round(parseFloat(d.main.temp) - 273.15);
        document.getElementById('showDegree').innerHTML = celcius;
        document.getElementById('showFahrenheit').innerHTML = '&deg;' + 'C' ; 
  });
}      
      // window.onload = function() {
      // 	weatherBallon('chennai');
      // }

 

      

      
  