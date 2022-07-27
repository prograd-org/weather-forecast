function getWeatherDetail(city){
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=c325ad874b85ef2783ec85f8e2c98523`, {method: "GET",})
    .then(response => response.json())
    .then(data => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=fbb1e56f93d99bf2d9cb553bde5ad710`, {method: "GET",})
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let sunrise = data.sys.sunrise;
            let sunset = data.sys.sunset;
            console.log(new Date().getTimezoneOffset()*60);
            let sunriseD = new Date((sunrise + (data.timezone + new Date().getTimezoneOffset()*60))*1000);
            let sunsetD = new Date((sunset + (data.timezone + new Date().getTimezoneOffset()*60))*1000);
            console.log(sunriseD.toString(), sunsetD.toString());
            let sunriseT = sunriseD.getHours()*60 + sunriseD.getMinutes()
            let sunsetT = sunsetD.getHours()*60 + sunsetD.getMinutes();
            
            
            let diff = sunsetT - sunriseT;
            
            var sun = document.querySelector(".sun")
            var moon = document.querySelector(".moon");
            setInterval(() => {
                let d = new Date();
                let offs = data.timezone/60 + d.getTimezoneOffset();
                let a = d.getHours()*60 + d.getMinutes();
                a+=offs;
                let sunPos = 0;
                let moonPos = 0;
                if(a > sunriseT && a < sunsetT){
                    sunPos = a - sunriseT;
                }
                if(a < sunriseT){
                    moonPos = a + (1440 - sunsetT);
                }else if(a > sunsetT){
                    moonPos = a - (diff + sunriseT);
                }
                let sunPosX = sunPos/(diff/2)
                let sunPosY = Math.sqrt(1 - (sunPosX - 1)**2)
                sun.style.display = 'block';
                sun.style.left = `calc(${sunPosX*50}% - 96px)`
                sun.style.top = 100-sunPosY*100 + "%"
                
                let moonPosX = moonPos/(1440 - sunsetT)
                let moonPosY = Math.sqrt((1- (moonPosX - 1)**2));
                moon.style.display = 'block';
                moon.style.left = `calc(${moonPosX*50}% - 96px)`
                moon.style.top = 100-moonPosY*100 + "%";
                document.querySelector("#mask").style.backgroundColor = `rgb(0, 0, 0, ${(1 - Math.abs(moonPosX-1))*0.7})`;
                document.querySelector(".main").innerHTML = `
                    <section class="location">
                        <div class="city">${data.name}, ${data.sys.country}</div>
                        <div class="date">${new Date((data.dt+ data.timezone + new Date().getTimezoneOffset()*60)*1000).toString().substring(0, 21)}</div>
                    </section>
                    <div class="current">
                        <div class="temp"><span>${~~data.main.feels_like}°C</span></div>
                        <div class="weather">${data.weather[0].description}</div>
                        <div class="hi-low" style="text-align: center;">${~~data.main.temp_max}°C High<br>|<br> ${~~data.main.temp_min}°C Low</div>
                    </div>
                `
            }, 1000);
        })
    })
}

let url = new URL(window.location.href);
let params = new URLSearchParams(url.search)


if(params.get('q')) {
    getWeatherDetail(params.get('q'))
}
