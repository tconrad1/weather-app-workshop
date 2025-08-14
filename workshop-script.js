/*
  Weather App Workshop - JavaScript File
  
  This file contains the skeleton structure for the Weather App JavaScript functionality.
  Follow the steps below to complete the workshop.
*/


// ====== STEP 1: Setup API Variables ======
// TODO: Replace with your own API key from OpenWeatherMap
const apiKey = "0c3112798d148efd9258b36ca65acc4c";
;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";


// ====== STEP 2.4: Select DOM Elements ======
// TODO: Select the search input, search button, and weather icon elements

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


// ====== STEP 2: Create the checkWeather Function ======
/*
  This function will:
  1. Fetch weather data from the API
  2. Update the UI with the weather information
  3. Handle any errors that occur
*/
async function checkWeather() {
    try {
        //STEP 2.1: Fetch weather data from the API using the city parameter
        const response = await fetch(apiUrl + `&appid=${apiKey}`);
        //STEP 2.7: Check if the city exists (handle 404 error)
        // If the city doesn't exist, show error message and hide weather info

        //STEP 2.2: Extract the weather data from the API response
        const data = await response.json();
        console.log(data);

        //STEP 2.3: Update the DOM elements with the weather data �F
        // - Update city name
        // - Update temperature
        // - Update humidity
        // - Update wind speed
        
        //STEP 2.6: Update the weather icon based on weather conditions
        // Different weather conditions: Clouds, Clear, Rain, Drizzle, Mist, Snow
        
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }
        

        //STEP 2.8: Show the weather information and hide the error message
            document.querySelector(".error").style.display = "none";
            document.querySelector(".weather").style.display = "block";
        
    } catch (error) {
        // Handle any errors that might occur during the API call
        console.error("Error fetching weather data:", error);
    }
}

checkWeather();
// ====== STEP 2.5: Add Event Listeners ======
// TODO: Add a click event listener to the search button
// TODO: Add a keypress event listener to the search input for the Enter key

async function checkWeather(city) {
    try {

        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404 ){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";            
        }
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;F";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " mph";


    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});