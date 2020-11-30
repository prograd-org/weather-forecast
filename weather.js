//Complete the Weather API Backend part using openweathermap api


var city = document.querySelector(".search-box")

var apiKey = '3bdca618072c4423ee7de068a9c6d0a1'

city.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`
        fetch(url)
            .then(response => response.json())
            .then(data => displayWeather(data))
            .catch(error => console.log(error));
    }
})


var displayWeather = data => {

    let date = new Date(Date(data.dt))

    document.querySelector(".city").innerHTML = `${data.name}, ${data.sys.country}`;

    document.querySelector(".date").innerHTML = `${getDay(date.getDay())} ${date.getDate()} ${getMonth(date.getMonth())} ${date.getFullYear()}`

    document.querySelector(".temp span").innerHTML = `${data.main.temp}°c`;

    document.querySelector(".weather").innerHTML = data.weather[0].main

    document.querySelector(".hi-low").innerHTML = `${data.main.temp_min}°c/${data.main.temp_max}°c`
}


function getDay(number) {
    switch (number) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thrusday"
        case 5:
            return "Friday"
        case 7:
            return "Saturday"
    }
}

function getMonth(number) {
    switch (number) {
        case 0:
            return "January"
        case 1:
            return "February"
        case 2:
            return "March"
        case 3:
            return "April"
        case 4:
            return "May"
        case 5:
            return "June"
        case 6:
            return "July"
        case 7:
            return "August"
        case 8:
            return "September"
        case 9:
            return "October"
        case 10:
            return "November"
        case 11:
            return "December"
    }
}