const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherContainer = document.getElementById('weatherContainer');
const currentTimeElement = document.getElementById('currentTime');
const dataSourceElement = document.getElementById('dataSource');

const API_KEYS = {
    openWeather: "YOUR_API_KEY_HERE"
};

const LOCATION_DATABASE = {
    'states': {
        'rajasthan': { capital: 'Jaipur', cities: ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota', 'Ajmer', 'Bikaner', 'Jaisalmer'] },
        'maharashtra': { capital: 'Mumbai', cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Kolhapur', 'Solapur'] },
        'karnataka': { capital: 'Bengaluru', cities: ['Bengaluru', 'Mysuru', 'Hubballi', 'Mangaluru', 'Belagavi', 'Shivamogga'] },
        'tamil nadu': { capital: 'Chennai', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 'Erode'] },
        'gujarat': { capital: 'Gandhinagar', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar'] },
        'punjab': { capital: 'Chandigarh', cities: ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda', 'Pathankot'] },
        'west bengal': { capital: 'Kolkata', cities: ['Kolkata', 'Howrah', 'Durgapur', 'Siliguri', 'Asansol', 'Malda'] },
        'uttar pradesh': { capital: 'Lucknow', cities: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Prayagraj', 'Ghaziabad'] },
        'bihar': { capital: 'Patna', cities: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga'] },
        'kerala': { capital: 'Thiruvananthapuram', cities: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Malappuram'] },
        'andhra pradesh': { capital: 'Amaravati', cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool'] },
        'telangana': { capital: 'Hyderabad', cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Karimnagar'] },
        'madhya pradesh': { capital: 'Bhopal', cities: ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar'] },
        'odisha': { capital: 'Bhubaneswar', cities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur'] },
        'assam': { capital: 'Dispur', cities: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon'] }
    },

    'countries': {
        'india': { capital: 'New Delhi', cities: ['New Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Bengaluru', 'Hyderabad'] },
        'usa': { capital: 'Washington', cities: ['New York', 'Los Angeles', 'Chicago', 'Miami', 'San Francisco', 'Boston'] },
        'uk': { capital: 'London', cities: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Glasgow', 'Edinburgh'] },
        'canada': { capital: 'Ottawa', cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Edmonton', 'Winnipeg'] },
        'australia': { capital: 'Canberra', cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast'] },
        'germany': { capital: 'Berlin', cities: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne', 'Stuttgart'] },
        'france': { capital: 'Paris', cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Strasbourg'] },
        'japan': { capital: 'Tokyo', cities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya', 'Sapporo'] },
        'china': { capital: 'Beijing', cities: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Hong Kong'] },
        'brazil': { capital: 'Brasília', cities: ['Rio de Janeiro', 'São Paulo', 'Salvador', 'Fortaleza', 'Belo Horizonte'] }
    }
};

function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    currentTimeElement.innerHTML = `${timeString}<br><small>${dateString}</small>`;
}

setInterval(updateCurrentTime, 1000);
updateCurrentTime();

function universalWeatherSearch(query) {
    const lowerQuery = query.toLowerCase().trim();

    weatherContainer.innerHTML = `
        <div class="loading-container">
            <div class="weather-loader">
                <div class="loader-circle"></div>
                <div class="loader-text">Searching for "${query}"...</div>
            </div>
        </div>
    `;

    dataSourceElement.textContent = "Source: Connecting...";

    if (LOCATION_DATABASE.states[lowerQuery]) {
        showLocationOptions(lowerQuery, 'state');
        return;
    }

    if (LOCATION_DATABASE.countries[lowerQuery]) {
        showLocationOptions(lowerQuery, 'country');
        return;
    }

    getWeatherData(query);
}

function showLocationOptions(locationName, type) {
    const locationData = LOCATION_DATABASE[type + 's'][locationName];
    const displayName = capitalizeFirstLetter(locationName);
    const icon = type === 'state' ? '🏛️' : '🌍';

    weatherContainer.innerHTML = `
        <div class="location-options">
            <div class="options-header">
                <div class="location-icon">${icon}</div>
                <h3>${displayName}</h3>
                <p>Select a city to view weather:</p>
            </div>
            <div class="options-grid">
                <div class="option-card capital" onclick="getWeatherData('${locationData.capital}')">
                    <div class="option-icon">⭐</div>
                    <div class="option-type">Capital City</div>
                    <div class="option-name">${locationData.capital}</div>
                    <button class="select-btn">View Weather</button>
                </div>
                ${locationData.cities.filter(city => city !== locationData.capital).map(city => `
                    <div class="option-card city" onclick="getWeatherData('${city}')">
                        <div class="option-icon">🏙️</div>
                        <div class="option-type">Major City</div>
                        <div class="option-name">${city}</div>
                        <button class="select-btn">View Weather</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function getWeatherData(city) {
    console.log("Fetching weather for:", city);

    weatherContainer.innerHTML = `
        <div class="loading-container">
            <div class="weather-loader">
                <div class="loader-circle"></div>
                <div class="loader-text">Detecting weather for ${city}...</div>
            </div>
        </div>
    `;

    dataSourceElement.textContent = "Source: Connecting...";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEYS.openWeather}&units=metric`)
        .then(response => {
            console.log("OpenWeather Response:", response.status);
            if (response.status === 401) {
                throw new Error('API key not activated yet');
            }
            if (!response.ok) {
                throw new Error('City not found in OpenWeather');
            }
            return response.json();
        })
        .then(data => {
            console.log("OpenWeather data:", data);
            dataSourceElement.textContent = "Source: OpenWeatherMap • Live";
            showWeather(data);
        })
        .catch(error => {
            console.log("OpenWeather failed:", error);
            useFreeWeatherAPI(city);
        });
}

function useFreeWeatherAPI(city) {
    console.log("Trying free weather API for:", city);

    weatherContainer.innerHTML = `
        <div class="loading-container">
            <div class="weather-loader">
                <div class="loader-circle"></div>
                <div class="loader-text">Trying alternative service for ${city}...</div>
            </div>
        </div>
    `;

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
        .then(response => response.json())
        .then(locationData => {
            if (!locationData.results || locationData.results.length === 0) {
                throw new Error('City not found in any service');
            }

            const { latitude, longitude, name, country } = locationData.results[0];
            console.log("Found location:", name, country);

            return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&timezone=auto`)
                .then(response => response.json())
                .then(weatherData => {
                    return {
                        name: name,
                        country: country,
                        temperature: weatherData.current.temperature_2m,
                        feels_like: weatherData.current.apparent_temperature,
                        humidity: weatherData.current.relative_humidity_2m,
                        wind_speed: weatherData.current.wind_speed_10m,
                        weather_code: weatherData.current.weather_code
                    };
                });
        })
        .then(weather => {
            dataSourceElement.textContent = "Source: Open-Meteo • Free API";
            showWeatherFromFreeAPI(weather);
        })
        .catch(error => {
            console.error("All APIs failed:", error);
            showError('Location not found. Try searching for a specific city name.');
        });
}

function showWeather(data) {
    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    const weatherIcon = getWeatherIcon(data.weather[0].main, data.weather[0].icon);

    weatherContainer.innerHTML = `
        <div class="weather-card">
            <div class="location-info">
                <h2 class="city-name">${data.name}</h2>
                <div class="country-name">${data.sys.country}</div>
            </div>
            
            <div class="weather-main-info">
                <div class="temperature">${Math.round(data.main.temp)}°</div>
                <div class="weather-condition">
                    <i class="fas ${weatherIcon} condition-icon"></i>
                    <span class="condition-text">${capitalizeFirstLetter(data.weather[0].description)}</span>
                </div>
            </div>
            
            <div class="weather-details">
                <div class="detail-card">
                    <div class="detail-icon">🌡️</div>
                    <div class="detail-label">Feels Like</div>
                    <div class="detail-value">${Math.round(data.main.feels_like)}°C</div>
                </div>
                <div class="detail-card">
                    <div class="detail-icon">💧</div>
                    <div class="detail-label">Humidity</div>
                    <div class="detail-value">${data.main.humidity}%</div>
                </div>
                <div class="detail-card">
                    <div class="detail-icon">💨</div>
                    <div class="detail-label">Wind Speed</div>
                    <div class="detail-value">${data.wind.speed} m/s</div>
                </div>
                <div class="detail-card">
                    <div class="detail-icon">🕒</div>
                    <div class="detail-label">Updated</div>
                    <div class="detail-value">${currentTime}</div>
                </div>
            </div>
        </div>
    `;
}

function showWeatherFromFreeAPI(data) {
    const weatherDescriptions = {
        0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
        45: "Fog", 48: "Fog", 51: "Light drizzle", 53: "Moderate drizzle",
        55: "Dense drizzle", 61: "Slight rain", 63: "Moderate rain",
        65: "Heavy rain", 80: "Rain showers", 81: "Moderate rain showers",
        82: "Violent rain showers"
    };

    const weatherText = weatherDescriptions[data.weather_code] || "Unknown";
    const weatherIcon = getWeatherIconFromCode(data.weather_code);

    weatherContainer.innerHTML = `
        <div class="weather-card">
            <div class="location-info">
                <h2 class="city-name">${data.name}</h2>
                <div class="country-name">${data.country}</div>
            </div>
            
            <div class="weather-main-info">
                <div class="temperature">${Math.round(data.temperature)}°</div>
                <div class="weather-condition">
                    <i class="fas ${weatherIcon} condition-icon"></i>
                    <span class="condition-text">${weatherText}</span>
                </div>
            </div>
            
            <div class="weather-details">
                <div class="detail-card">
                    <div class="detail-icon">🌡️</div>
                    <div class="detail-label">Feels Like</div>
                    <div class="detail-value">${Math.round(data.feels_like)}°C</div>
                </div>
                <div class="detail-card">
                    <div class="detail-icon">💧</div>
                    <div class="detail-label">Humidity</div>
                    <div class="detail-value">${data.humidity}%</div>
                </div>
                <div class="detail-card">
                    <div class="detail-icon">💨</div>
                    <div class="detail-label">Wind Speed</div>
                    <div class="detail-value">${data.wind_speed} km/h</div>
                </div>
                <div class="detail-card">
                    <div class="detail-icon">📡</div>
                    <div class="detail-label">Source</div>
                    <div class="detail-value">Free API</div>
                </div>
            </div>
        </div>
    `;
}

function showError(message) {
    dataSourceElement.textContent = "Source: Service Unavailable";

    weatherContainer.innerHTML = `
        <div class="error-container">
            <div class="error-icon">⚠️</div>
            <h3 class="error-title">Weather Service Unavailable</h3>
            <p class="error-message">${message}</p>
            <div class="retry-buttons">
                <button class="retry-button" onclick="universalWeatherSearch('Rajasthan')">Try Rajasthan</button>
                <button class="retry-button" onclick="universalWeatherSearch('Maharashtra')">Try Maharashtra</button>
                <button class="retry-button" onclick="universalWeatherSearch('USA')">Try USA</button>
                <button class="retry-button" onclick="universalWeatherSearch('Japan')">Try Japan</button>
            </div>
        </div>
    `;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getWeatherIcon(weatherMain, iconCode) {
    const iconMap = {
        'Clear': 'fa-sun',
        'Clouds': iconCode.includes('d') ? 'fa-cloud-sun' : 'fa-cloud-moon',
        'Rain': 'fa-cloud-rain',
        'Drizzle': 'fa-cloud-drizzle',
        'Thunderstorm': 'fa-bolt',
        'Snow': 'fa-snowflake',
        'Mist': 'fa-smog',
        'Smoke': 'fa-smog',
        'Haze': 'fa-smog',
        'Dust': 'fa-smog',
        'Fog': 'fa-smog',
        'Sand': 'fa-smog',
        'Ash': 'fa-smog',
        'Squall': 'fa-wind',
        'Tornado': 'fa-tornado'
    };

    return iconMap[weatherMain] || 'fa-cloud';
}

function getWeatherIconFromCode(weatherCode) {
    if (weatherCode === 0) return 'fa-sun';
    if (weatherCode <= 3) return 'fa-cloud-sun';
    if (weatherCode <= 55) return 'fa-cloud-drizzle';
    if (weatherCode <= 65) return 'fa-cloud-rain';
    if (weatherCode <= 82) return 'fa-cloud-showers-heavy';
    return 'fa-cloud';
}

searchBtn.addEventListener('click', () => {
    const query = cityInput.value.trim();
    if (query) {
        universalWeatherSearch(query);
    } else {
        showError('Please enter a city, state, or country name');
    }
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = cityInput.value.trim();
        if (query) {
            universalWeatherSearch(query);
        }
    }
});

document.querySelectorAll('.city-chip').forEach(button => {
    button.addEventListener('click', () => {
        const city = button.getAttribute('data-city');
        cityInput.value = city;
        universalWeatherSearch(city);
    });
});

setInterval(() => {
    const currentCity = cityInput.value.trim();
    if (currentCity) {
        getWeatherData(currentCity);
    }
}, 600000);

const locationStyles = `
    .location-options {
        padding: 20px;
        text-align: center;
    }

    .options-header {
        margin-bottom: 25px;
    }

    .options-header .location-icon {
        font-size: 3rem;
        margin-bottom: 10px;
    }

    .options-header h3 {
        color: #2d3436;
        margin-bottom: 5px;
        font-size: 1.5rem;
    }

    .options-header p {
        color: #636e72;
        font-size: 1rem;
    }

    .options-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        margin-top: 20px;
    }

    .option-card {
        background: white;
        border-radius: 15px;
        padding: 20px;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        cursor: pointer;
        transition: all 0.3s ease;
        border: 2px solid transparent;
    }

    .option-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        border-color: #3498db;
    }

    .option-card.capital {
        background: linear-gradient(135deg, #ffeaa7, #fdcb6e);
    }

    .option-card.city {
        background: linear-gradient(135deg, #74b9ff, #0984e3);
        color: white;
    }

    .option-card.city .option-type,
    .option-card.city .option-name {
        color: white;
    }

    .option-icon {
        font-size: 2rem;
        margin-bottom: 10px;
    }

    .option-type {
        font-size: 0.8rem;
        color: #636e72;
        margin-bottom: 5px;
        text-transform: uppercase;
        font-weight: 600;
    }

    .option-name {
        font-size: 1.2rem;
        font-weight: 600;
        color: #2d3436;
        margin-bottom: 15px;
    }

    .select-btn {
        background: #3498db;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 20px;
        cursor: pointer;
        font-weight: 500;
        transition: all 0.3s ease;
    }

    .select-btn:hover {
        background: #2980b9;
        transform: scale(1.05);
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = locationStyles;
document.head.appendChild(styleSheet);

window.addEventListener('load', () => {
    universalWeatherSearch('Delhi');
});