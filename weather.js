function getWeather(city) {
    const apiKey = 'd8accaff35731d933da84f7860c179a0'; // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Extracting the required weather information
            const temperature = data.main.temp;
            const clouds = data.clouds.all;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            // Log or use the information as needed
            console.log(`Temperature: ${temperature} K`);
            console.log(`Cloudiness: ${clouds}%`);
            console.log(`Humidity: ${humidity}%`);
            console.log(`Wind Speed: ${windSpeed} m/s`);

            // Update the DOM with the weather information
            updateWeatherUI(city, temperature, clouds, humidity, windSpeed);
        })
        .catch(error => {
            console.error(`Failed to fetch weather data: ${error.message}`);
        });
}

function updateWeatherUI(city, temperature, clouds, humidity, windSpeed) {
    const cityElement = document.querySelector('.city');
    const tempElement = document.querySelector('.temp');
    const iconElement = document.querySelector('.icon');
    const descriptionElement = document.querySelector('.description');
    const humidityElement = document.querySelector('.humidity');
    const windElement = document.querySelector('.wind');

    // Update the HTML content with the weather information
    tempinCelius =temperature-273;
    cityElement.textContent = `Weather in ${city}`;
    tempElement.textContent = tempinCelius.toFixed(2) +' C'; 
    descriptionElement.textContent = `Cloudiness: ${clouds}%`;
    humidityElement.textContent = `Humidity: ${humidity}%`;
    windElement.textContent = `Wind Speed: ${windSpeed} m/s`;
}

// Example usage:
const searchButton = document.querySelector('button');
const searchBar = document.querySelector('.search-bar');

searchButton.addEventListener('click', () => {
    const city = searchBar.value.trim();
    if (city) {
        getWeather(city);
    } else {
        console.error('Please enter a city');
    }
});
