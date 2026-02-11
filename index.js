const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";
const BASE_URL ="http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&q=";

function getWeatherData(city, callback) {
const url = `${BASE_URL}${city}&appid=${API_KEY}&units=metric&lang=fr`;

fetch(url)
.then((res) => res.json())
.then((weatherData) => callback(null, weatherData))
.catch((error) => callback(error, null));
}

function printWeatherData(city) {
    getWeatherData(city, (error, data) => {
        console.log("Desciption: " + data.weather[0].description);
        console.log("Température: " + data.main.temp);
        console.log("Humidité: " + data.main.humidity); 
    });
}
printWeatherData("Sousse");
