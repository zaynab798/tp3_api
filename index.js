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


function getbookData(isbn, callback) {
    const url = `https://openlibrary.org/search.json?q=${isbn}`;

    fetch(url)
    .then((res) => res.json())
    .then((bookData) => callback(null, bookData))
    .catch((error) => callback(error, null));
}

function printBookData(isbn) {
    getbookData(isbn, (error, data) => {
        console.log("Title: " + data.docs[0].title);
        console.log("Author: " + data.docs[0].author_name[0]);
    });
}
printBookData("978-3-16-148410-0");

function getNasaData(callback) {
    const url= 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

    fetch(url)
    .then((res) => res.json())
    .then((nasaData) => callback(null, nasaData))
    .catch((error) => callback(error, null));
}

function printNasaData() {
    getNasaData((error, data) => {
        console.log("Title: " + data.title);
        console.log("Date: " + data.date);
        console.log("Image: " + data.url);
    });
}
printNasaData();

