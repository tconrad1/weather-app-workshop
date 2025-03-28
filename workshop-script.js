/*
  Weather App Workshop - JavaScript File
  
  This file contains the skeleton structure for the Weather App JavaScript functionality.
  Follow the steps below to complete the workshop.
*/


// ====== STEP 1: Setup API Variables ======
// TODO: Replace with your own API key from OpenWeatherMap
const apiKey = "Replace With API Key";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";


// ====== STEP 3.4: Select DOM Elements ======
// TODO: Select the search input, search button, and weather icon elements


// ====== STEP 2: Create the checkWeather Function ======
/*
  This function will:
  1. Fetch weather data from the API
  2. Update the UI with the weather information
  3. Handle any errors that occur
*/
async function checkWeather() {
    try {
        // 2.1: Fetch weather data from the API using the city parameter

        // 2.7: Check if the city exists (handle 404 error)
        // If the city doesn't exist, show error message and hide weather info

        // 2.2: Extract the weather data from the API response

        // 2.3: Update the DOM elements with the weather data °F
        // - Update city name
        // - Update temperature
        // - Update humidity
        // - Update wind speed

        // 2.6: Update the weather icon based on weather conditions
        // Different weather conditions: Clouds, Clear, Rain, Drizzle, Mist, Snow
        /*
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
        */

        // 2.8: Show the weather information and hide the error message

    } catch (error) {
        // Handle any errors that might occur during the API call
        console.error("Error fetching weather data:", error);
    }
}

// ====== STEP 2.5: Add Event Listeners ======
// TODO: Add a click event listener to the search button
// TODO: Add a keypress event listener to the search input for the Enter key