/*
  Weather App Workshop - JavaScript File
  
  This file contains the skeleton structure for the Weather App JavaScript functionality.
  Follow the steps below to complete the workshop.
*/


// ====== STEP 1: Setup API Variables ======
// TODO: Replace with your own API key from OpenWeatherMap
const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// ====== STEP 2: Select DOM Elements ======
// TODO: Select the search input, search button, and weather icon elements
const searchBox = /* Select the search input element */;
const searchBtn = /* Select the search button element */;
const weatherIcon = /* Select the weather icon element */;


// ====== STEP 3: Create the checkWeather Function ======
/*
  This function will:
  1. Fetch weather data from the API
  2. Update the UI with the weather information
  3. Handle any errors that occur
*/
async function checkWeather(city) {
  try {
    // 3.1: Fetch weather data from the API using the city parameter
    
    // 3.5: Check if the city exists (handle 404 error)
    // If the city doesn't exist, show error message and hide weather info
    
    // 3.2: Extract the weather data from the API response
    
    // 3.3: Update the DOM elements with the weather data
    // - Update city name
    // - Update temperature 
    // - Update humidity
    // - Update wind speed
    
    // 3.4: Update the weather icon based on weather conditions
    // Different weather conditions: Clouds, Clear, Rain, Drizzle, Mist, Snow
    
    // 3.6: Show the weather information and hide the error message
    
  } catch(error) {
    // 3.7: Handle any errors that might occur during the API call
    console.error("Error fetching weather data:", error);
  }
}


// ====== STEP 4: Add Event Listeners ======
// TODO: Add a click event listener to the search button

// TODO: Add a keypress event listener to the search input for the Enter key