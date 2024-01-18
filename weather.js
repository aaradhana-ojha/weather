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
        })
        .catch(error => {
            console.error(`Failed to fetch weather data: ${error.message}`);
        });
    }
    
    // Example usage:
    getWeather('Denver');

