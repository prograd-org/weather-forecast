//Complete the Weather API Backend part using openweathermap api
var apikey = '6df505295cfe584a010b210add9eda0e';

function getData(){
    var input = document.getElementById('search-box').nodeValue;
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=metrics';
    const d = new Date();
    
    fetch(url)
    .then( response => response.json())
    .then( data => {
        document.getElementById('city').innerHTML =  data.name;
        document.getElementById('date').innerHTML =  d;
        document.getElementById('temp').innerHTML = data.main.temp + '°c';
        document.getElementById('weather').innerHTML = data.weather.main;
        document.getElementById('hi-low').innerHTML = data.main.temp_max + '°c' + '/' + data.main.temp_min + '°c';
    })
    .catch(() => {
        msg.textContent = 'Please enter a valid city name';
    });
}

