//Complete the Weather API Backend part using openweathermap api
var searchbtn = document.querySelector(".search");
var apikey ='2cdd600235cd2130b49ae779c0f9f59c';
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
searchbtn.addEventListener('click',()=>{
    let search_city = document.querySelector(".search-box").value;
    console.log(search_city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search_city}&appid=${apikey}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector(".city").innerHTML=`${data.name}, ${data.sys.country}`;
        let date=new Date()
        document.querySelector(".weather").innerHTML=`${data.weather[0].main}`;
        document.querySelector(".date").innerHTML=`${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        document.querySelector(".temp").innerHTML=`${Math.round(data.main.temp-273.15)}°c`;
        document.querySelector(".hi-low").innerHTML=`${Math.round(data.main.temp_min-273.15)}°c / ${Math.round(data.main.temp_max-273.15)}°c`; 
    })
        .catch(()=>{
            alert("Please Search for Correct City");
        })
});