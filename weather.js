//Complete the Weather API Backend part using openweathermap api
const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
const months=['january','february','march','april','may','june','july','august','september','october','november','december']
let today=new Date();
function getdata(){
    const search_city=document.querySelector('.search-box').value
    console.log(search_city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search_city}&units=metric&appid=1f73f4a2c1a737795b75542c08cf2721`
    fetch(url)
    .then(response=>response.json())
    .then(output =>{
        console.log(output)
        document.querySelector('.city').innerHTML= output.name +" , "+ output.sys.country
        document.querySelector('.date').innerHTML = days[today.getDay()] + " " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear()
        document.querySelector('.temp').innerHTML = output.main.temp +"°c"
        document.querySelector('.weather').innerHTML=output.weather[0].main
        document.querySelector('.hi-low').innerHTML = output.main.temp_min + "°c / "+output.main.temp_max +"°c"
    })
    .catch(
        function(error)
        {
            console.log(error)
        }
    )
}

