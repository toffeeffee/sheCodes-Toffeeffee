let remembetemper = 0;
function displayWeather(response) {
	let temperature = Math.round(response.data.main.temp);
	let temp = document.querySelector("#temp");
	temp.innerHTML = temperature;
	remembetemper = temperature;
	let windspeed = Math.round(response.data.wind.speed);
	wind.innerHTML = windspeed;
	let weatherdescript = response.data.weather[0].description;
	weather.innerHTML = weatherdescript;
	let now = document.querySelector("#today");
	now.innerHTML = formatDate(response.data.dt * 1000);
	let iconElement = document.querySelector("#icon");
	icon.innerHTML = iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
	let iconElement1 = document.querySelector("#icon1");
	icon1.innerHTML = iconElement1.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
	getForecast(response.data.coord);
	console.log(response.data.daily);
}

function formatDate(timestamp) {
	let date = new Date(timestamp);
	let hours = date.getHours();
		if (hours < 10) {
			hours = `0${hours}`;
	}
	let minutes = date.getMinutes();
		if (minutes < 10) {
			minutes = `0${minutes}`;
	}
	let currentday = date.getDay();
	let days = [
	  "Sun",
	  "Mon",
	  "Tue",
	  "Wed",
	  "Thu",
	  "Fri",
	  "Sat"
	];
	let months = [
		"Dec",
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Sep",
		"Oct",
		"Nov"
	]
	let day = days[date.getDay()];
	let month = months[date.getMonth()];
 
	return (`${currentday} ${month}<br> ${day}${hours}: ${minutes}`);	
}

function formatDay(timestamp) {
	let date = new Date(timestamp * 1000);
	let currentday = date.getDay();
	let days = [
	  "Sun",
	  "Mon",
	  "Tue",
	  "Wed",
	  "Thu",
	  "Fri",
	  "Sat"
	];
	let months = [
		"Dec",
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Sep",
		"Oct",
		"Nov"
	]
	let day = days[date.getDay()];
	let month = months[date.getMonth()];
	return (`${currentday} ${month}<br> ${day}`);
}

function displayForecast(response){
	let forecast = response.data.daily;
	let forecastElement = document.querySelector("#forecast");
	let forecastHTML = `<div class="row d-flex justify-content-around mt-5 pt-5">`;
	forecast.forEach(function (forecastDay, index){
		if (index < 5) {
			forecastHTML =forecastHTML +
			`
			<div class="col-2">
			<div class="dat">${formatDay(forecastDay.dt)}</div>
			<img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" alt="Clear" id="icon1" style="width:100px; height:auto;"/>
			<!-- <i class="fas fa-regular fa-sun icon"></i> -->
		<div class="hightemp temp">max ${Math.round(forecastDay.temp.max)} °C</div>
			<div class="lowtemp temp">min ${Math.round(forecastDay.temp.min)} °C</div>
			</div>
			`;
			// remembetempermax[forecastDay] = Math.round(forecastDay.temp.max);
			// remembetempermin[forecastDay] = Math.round(forecastDay.temp.min);
		}
	});
	
	forecastHTML = forecastHTML + `</div>`;
	forecastElement.innerHTML = forecastHTML;
} 
function getForecast(coordinates) {
	console.log(coordinates);
	let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
	let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(displayForecast);
}

function cityAsk(event) {
	event.preventDefault();
	let h1 = document.querySelector("h1");
	let city = document.querySelector("#city");
	let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
	axios.get(url).then(displayWeather);
	city = capitalizeFirstLetter(city.value);
	h1.innerHTML = city;
}

function defaultCity(city) {
	let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	axios.get(url).then(displayWeather);
}

let element = document.querySelector("#submit-search");
element.addEventListener("click", cityAsk);

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function celcium(event) {
	event.preventDefault();
	let temp = document.querySelector("#temp");
	temp.innerHTML = remembetemper;
}

let getcel = document.querySelector("#celc");
getcel.addEventListener("click", celcium);

function farangeit(faran) {
	let temp = document.querySelector("#temp");
	temp.innerHTML = (remembetemper*9/5) + 32;
}

let getFar = document.querySelector("#faran");
getFar.addEventListener("click", farangeit);

defaultCity("Kyiv");
