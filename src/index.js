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
  let iconElement = document.querySelector("#icon");
  icon.innerHTML = iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function cityAsk(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let city = document.querySelector("#city");
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayWeather);

  h1.innerHTML = city.value;
}

function defaultCity(city) {
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayWeather);
}

let element = document.querySelector("#submit-search");
element.addEventListener("click", cityAsk);

let today = new Date();
let day = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
];
let month = [
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

let now = document.querySelector("#today");
now.innerHTML = `${today.getDate()} ${month[today.getMonth()]}<br> ${
  day[today.getDay()]
} ${today.getHours()}: ${today.getMinutes()}`;

let nextday = document.querySelector("#dat1");
nextday.innerHTML = `${today.getDate()+1} ${month[today.getMonth()]}<br> ${
  day[today.getDay()+1]
}`;

let nextday2 = document.querySelector("#dat2");
nextday2.innerHTML = `${today.getDate()+2} ${month[today.getMonth()]}<br> ${
  day[today.getDay()+2]
}`;
let nextday3 = document.querySelector("#dat3");
nextday3.innerHTML = `${today.getDate()+3} ${month[today.getMonth()]}<br> ${
  day[today.getDay()+3]
}`;
let nextday4 = document.querySelector("#dat4");
nextday4.innerHTML = `${today.getDate()+1} ${month[today.getMonth()]}<br> ${
  day[today.getDay()+4]
}`;
let nextday5 = document.querySelector("#dat5");
nextday5.innerHTML = `${today.getDate()+5} ${month[today.getMonth()]}<br> ${
  day[today.getDay()+5]
}`;

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
