//Complete the Weather API Backend part using openweathermap api
//Complete the Weather API Backend part using openweathermap api
let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December'];



document.querySelector('.search').addEventListener('click', () => {
	let input = document.querySelector('.search-box').value;
	if (input === "") {
		alert("Please enter the city!");
		return;
	}
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=563ab618a11ed790dbc9970f64fa4f81`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			document.querySelector('.city').textContent = `${data.name}, ${data.sys.country}`;
			let date = new Date();
			document.querySelector('.date').textContent = `${day[date.getDay()]} ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
			document.querySelector('.temp').textContent = `${parseInt(data.main.temp-273.15)}°c`;
			document.querySelector('.weather').textContent = `${data.weather[0].main}`;
			document.querySelector('.high-low').textContent = `${parseInt(data.main.temp_min-273.15)}°c / ${parseInt(data.main.temp_max-273.15)}°c`;
		})
		.catch(() => {
			alert("The city you entered is incorrect!");
		})
});
