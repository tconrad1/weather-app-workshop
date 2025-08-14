// ====== STEP 1: Setup API Variables ======
const apiKey = "fe43774f5d9498eca1a93c8d20e6d41a"; // Replace with your OpenWeatherMap API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=arlington";

// ====== STEP 2: Create the checkWeather Function ======
async function checkWeather() {
    try {

        //STEP 2.1: Fetch weather data from the API using the city parameter
        const response = await fetch(apiUrl + `&appid=${apiKey}`);

        //STEP 2.2: Extract the weather data from the API response
        const data = await response.json();

        console.log(data)

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

checkWeather();