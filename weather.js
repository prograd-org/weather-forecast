

var apiKey = 'ca398e759895dcc24e3a1b9a43315752';

var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var today = new Date();
function getData()
{

    var input = document.getElementById('input').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`
    fetch(url)
    .then(response=>response.json())
    .then(data =>{
        console.log(data)
        document.querySelector('.city').innerHTML= data.name +" , "+ data.sys.country
        document.querySelector('.date').innerHTML = weekDays[today.getDay()] + " " + today.getDate() + " " + month[today.getMonth()] + " " + today.getFullYear()
        document.querySelector('.temp').innerHTML = data.main.temp +"°c"
        document.querySelector('.weather').innerHTML=data.weather[0].main
        document.querySelector('.hi-low').innerHTML = data.main.temp_min + "°c / "+data.main.temp_max +"°c"
    })
}