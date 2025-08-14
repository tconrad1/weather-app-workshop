// ====== STEP 1: Setup API Variables ======
const apiKey = "fe43774f5d9498eca1a93c8d20e6d41a"; // Replace with your OpenWeatherMap API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

// ====== STEP 2.4: Select DOM Elements ======
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

// ====== STEP 2: Create the checkWeather Function ======
async function checkWeather(city) {
    try {

        //STEP 2.1: Fetch weather data from the API using the city parameter
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        //STEP 2.2: Extract the weather data from the API response
        const data = await response.json();

        //STEP 2.3: Update the DOM elements with the weather data °F
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;F";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " mph";

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// ====== STEP 2.5: Add Event Listeners ======
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});