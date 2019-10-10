const key = '2ebbc925a11c3ea05fe72bb48f8ad49d';
let cityName;

function weatherBallon(city) {
  let cityName = document.getElementById("cityName").value;
  // console.log(cityName);
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key)
    // console.log(cityName)  
    .then(function (resp) {
      return resp.json()
    }) // Convert data to json
    .then(function (data) {
      // console.log(data);
      drawWeather(data);
      // showFahrenheit(data);

    })
    .catch(function () {
      // catch any errors
    });
}


function drawWeather(d) {
  console.log(d);
  let celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  let description = d.weather[0].description;
  console.log(d)
  let country = d.sys.country;
  //   console.log(d.name);


  document.getElementById('showDescription').innerHTML = description;
  document.getElementById('showDegree').innerHTML = celcius;
  document.getElementById('showCity').innerHTML = d.name;
  document.getElementById('showCountry').innerHTML = country;

$('.Celsius').on('click',function (){
  let fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
  console.log(fahrenheit);   
  document.getElementById('showDegree').innerHTML = fahrenheit; 
});
}



// window.onload = function() {
// 	weatherBallon('chennai');
// }

// function showFahrenheit(){
//     weatherBallon(city)
    
//     let fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
//     console.log(fahrenheit);
//     document.getElementById('showFahrenheit').innerHTML = fahrenheit; 
//     // console.log(fahrenheit);
// }

// document.getElementsByClassName("showFahrenheit")[0].addEventListener("click", function(){
//   degreeInput = celcius  
//     let fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
//     // passing the value as a parameter to class constructor
//     let func=new degreeConversionCelsius(degreeInput);
// });