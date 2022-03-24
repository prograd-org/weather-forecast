//Complete the Weather API Backend part using openweathermap api

function apidata() {
  var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var today = new Date();
  var key = "6a2547232fc58c844e7d59f7243fcd94";
  var input = document.querySelector("#input").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${key}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var temp = data.main.temp;
      var temp_min = data.main.temp_min;
      var temp_max = data.main.temp_max;
      var country = data.sys.country;
      var weather_status = data.weather[0].main;
      var city = data.name;
      console.log(temp, temp_min, temp_max, city, country, weather_status);
      document.querySelector(".city").innerHTML = city + ", " + country;
      document.querySelector(".date").innerHTML =
        weekDays[today.getDay()] +
        " " +
        today.getDate() +
        " " +
        month[today.getMonth()] +
        " " +
        today.getFullYear();
      document.querySelector(".temp").innerHTML = temp + "°c";
      document.querySelector(".weather").innerHTML = weather_status
      document.querySelector(".hi-low").innerHTML =
        temp_min + "°c /" + temp_max + "°c";
    });
}
