function displayWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#temp");
  temp.innerHTML = temperature;
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

let element = document.querySelector("#submit-search");
element.addEventListener("click", cityAsk);

let today = new Date();
let day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let now = document.querySelector("#today");
now.innerHTML = `${
  day[today.getDay()]
} ${today.getHours()}: ${today.getMinutes()}`;

function celcium(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = "25";
}

let getcel = document.querySelector("#celc");
getcel.addEventListener("click", celcium);

function farangeit(faran) {
  let temp = document.querySelector("#temp");
  temp.innerHTML = "77";
}

let getFar = document.querySelector("#faran");
getFar.addEventListener("click", farangeit);
