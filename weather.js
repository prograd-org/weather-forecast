//Complete the Weather API Backend part using openweathermap api
let setAPI = async({ lat, long, api, part }) => {
    try {
        // let lat = 13.08784
        // let lon = 80.27847
        let data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${part}&appid=${api}`)
        if (data.status === 200)
            return await data.json()


    } catch (error) {
        console.log(error);

    }
}




const fetchdata = async() => {
    try {
        const showposiion = async(position) => {
            let lat = position.coords.latitude
            let long = position.coords.longitude
                //let lat = 23.45
                //let long = 94.04
            const APIkey = 'fd612df03d9a6aa28a37f197dd6ee20e'
            let data = await setAPI({
                lat: lat,
                long: long,
                api: APIkey,
                part: ''
            })
            console.log(data.current);

            document.querySelector(".search-box").value = data.timezone
            document.querySelector(".city").innerHTML = data.timezone
            document.querySelector(".date").innerHTML = new Date(position.timestamp).toDateString()
            document.querySelector(".temp").innerHTML = data.current.temp + "°c"

            document.querySelector(".weather").innerHTML = (data.current.weather.map(ele => ele.main)).join(",")
            document.querySelector(".hi-low").innerHTML = data.current.temp - 1 + "°c / " + (data.current.feels_like) + "°c"

        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showposiion)
        }


    } catch (error) {
        console.log(error);
    }
}



fetchdata()

const mapapi = 'AIzaSyAq-Khiwsf4CsGDSC3JIbvo9vLYPdGaWy4'

var getLocation = function(address) {


    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            console.log(latitude, longitude);
        }
    });
}

//Call the function with address as parameter
getLocation('New York');