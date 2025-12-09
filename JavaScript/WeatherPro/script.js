const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherContainer = document.getElementById('weatherContainer');
const currentTimeElement = document.getElementById('currentTime');
const dataSourceElement = document.getElementById('dataSource');
const weatherTabs = document.getElementById('weatherTabs');
const tabContents = document.querySelectorAll('.tab-content');
const voiceSearchBtn = document.getElementById('voiceSearchBtn');
const voiceModal = document.getElementById('voiceModal');
const voiceStatus = document.getElementById('voiceStatus');
const voiceTranscript = document.getElementById('voiceTranscript');
const voiceClose = document.getElementById('voiceClose');
const voiceWave = document.querySelector('.voice-wave');
const themeToggle = document.getElementById('themeToggle');
const tempToggle = document.getElementById('tempToggle');
const autoLocation = document.getElementById('autoLocation');
const recentSearchesList = document.getElementById('recentSearchesList');
const favoritesList = document.getElementById('favoritesList');
const hourlyTimeline = document.getElementById('hourlyTimeline');
const forecastDays = document.getElementById('forecastDays');
const aqiMeter = document.getElementById('aqiMeter');
const aqiComponents = document.getElementById('aqiComponents');
const healthRecommendations = document.getElementById('healthRecommendations');
const weatherMap = document.getElementById('weatherMap');
const compareResults = document.getElementById('compareResults');
const suggestionsGrid = document.getElementById('suggestionsGrid');
const soundsToggle = document.getElementById('soundsToggle');
const shareBtn = document.getElementById('shareBtn');
const refreshBtn = document.getElementById('refreshBtn');
const apiStatus = document.getElementById('apiStatus');
const gpsStatus = document.getElementById('gpsStatus');
const cacheStatus = document.getElementById('cacheStatus');
const notificationContainer = document.getElementById('notificationContainer');

const APP_STATE = {
    currentCity: 'Delhi',
    isCelsius: true,
    isDarkTheme: false,
    favorites: JSON.parse(localStorage.getItem('weatherFavorites')) || [],
    recentSearches: JSON.parse(localStorage.getItem('recentSearches')) || [],
    currentWeather: null,
    map: null,
    soundPlaying: false,
    recognition: null,
    hourlyChart: null,
    locationDatabase: {
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
    },
    API_KEYS: {
        openWeather: "YOUR_API_KEY_HERE",
        mapbox: "pk.eyJ1Ijoid2VhdGhlcmFwcCIsImEiOiJjbHZqNnE1bmMwNGVnMmpxbGU2eGc2enBkIn0.1234567890"
    },
    sounds: {
        rain: document.getElementById('rainSound'),
        wind: document.getElementById('windSound'),
        thunder: document.getElementById('thunderSound')
    }
};

function initApp() {
    console.log("Initializing app...");
    
    checkSpeechRecognitionSupport();
    
    updateCurrentTime();
    loadTheme();
    loadRecentSearches();
    loadFavorites();
    initVoiceRecognition();
    initMap();
    setupEventListeners();
    
    universalWeatherSearch(APP_STATE.currentCity);
    
    monitorSystem();
    
    setInterval(updateCurrentTime, 1000);
    
    setInterval(() => {
        if (APP_STATE.currentCity) {
            getWeatherData(APP_STATE.currentCity);
        }
    }, 600000);
    
    console.log("App initialized successfully");
}

function checkSpeechRecognitionSupport() {
    const isChrome = !!window.chrome;
    const isEdge = !!window.StyleMedia;
    const isFirefox = typeof InstallTrigger !== 'undefined';
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (isSafari) {
        console.log("Safari detected - voice recognition may have limited support");
        if (window.location.protocol !== 'https:') {
            console.warn("Speech recognition may not work on Safari without HTTPS");
        }
    }
    
    if (isFirefox) {
        console.log("Firefox detected - voice recognition supported");
    }
    
    if (isChrome || isEdge) {
        console.log("Chrome/Edge detected - voice recognition fully supported");
    }
}

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

    if (currentTimeElement) {
        currentTimeElement.innerHTML = `${timeString}<br><small>${dateString}</small>`;
    }

    const lastUpdate = document.getElementById('lastUpdate');
    if (lastUpdate) {
        lastUpdate.textContent = `Last update: ${timeString}`;
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    APP_STATE.isDarkTheme = savedTheme === 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeButton();
}

function toggleTheme() {
    APP_STATE.isDarkTheme = !APP_STATE.isDarkTheme;
    const theme = APP_STATE.isDarkTheme ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeButton();

    if (APP_STATE.map) {
        updateMapTheme();
    }
}

function updateThemeButton() {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (icon) {
        icon.className = APP_STATE.isDarkTheme ? 'fas fa-sun' : 'fas fa-moon';
        themeToggle.title = APP_STATE.isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
}

function toggleTemperatureUnit() {
    APP_STATE.isCelsius = !APP_STATE.isCelsius;
    if (tempToggle) {
        tempToggle.textContent = APP_STATE.isCelsius ? '°C | °F' : '°F | °C';
    }

    if (APP_STATE.currentWeather) {
        updateTemperatureDisplay();
    }
}

function convertTemperature(temp) {
    if (APP_STATE.isCelsius) {
        return Math.round(temp);
    } else {
        return Math.round((temp * 9 / 5) + 32);
    }
}

function getTemperatureUnit() {
    return APP_STATE.isCelsius ? '°C' : '°F';
}

function initVoiceRecognition() {
    console.log("Initializing voice recognition...");
    
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        console.log("Speech recognition not supported in this browser");
        if (voiceSearchBtn) voiceSearchBtn.style.display = 'none';
        showNotification('Voice search not supported in your browser', 'warning');
        return;
    }

    try {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        APP_STATE.recognition = new SpeechRecognition();
        
        APP_STATE.recognition.continuous = false;
        APP_STATE.recognition.interimResults = false;
        APP_STATE.recognition.lang = 'en-US';
        APP_STATE.recognition.maxAlternatives = 3;

        APP_STATE.recognition.onstart = () => {
            console.log("Voice recognition started");
            if (voiceSearchBtn) voiceSearchBtn.classList.add('listening');
            if (voiceStatus) voiceStatus.textContent = 'Listening... Speak now!';
            if (voiceWave) voiceWave.classList.add('listening');
            updateVoiceStatus('listening', 'Speak the city name...');
        };

        APP_STATE.recognition.onresult = (event) => {
            console.log("Voice recognition result received");
            const transcript = event.results[0][0].transcript;
            
            if (voiceTranscript) {
                voiceTranscript.textContent = transcript;
            }
            
            updateVoiceStatus('success', 'City found!');
            
            setTimeout(() => {
                processVoiceCommand(transcript);
                stopVoiceRecognition();
            }, 500);
        };

        APP_STATE.recognition.onerror = (event) => {
            console.error("Voice recognition error:", event.error);
            
            let errorMessage = 'Voice recognition error';
            switch (event.error) {
                case 'no-speech':
                    errorMessage = 'No speech detected. Please try again.';
                    break;
                case 'audio-capture':
                    errorMessage = 'No microphone found. Please check your microphone.';
                    break;
                case 'not-allowed':
                    errorMessage = 'Microphone access denied. Please allow microphone access.';
                    break;
                case 'network':
                    errorMessage = 'Network error occurred. Please check your connection.';
                    break;
                default:
                    errorMessage = `Error: ${event.error}`;
            }
            
            updateVoiceStatus('error', errorMessage);
            showNotification(errorMessage, 'error');
            
            setTimeout(() => {
                stopVoiceRecognition();
            }, 2000);
        };

        APP_STATE.recognition.onend = () => {
            console.log("Voice recognition ended");
            stopVoiceRecognition();
        };

        console.log("Voice recognition initialized successfully");

    } catch (error) {
        console.error("Failed to initialize voice recognition:", error);
        if (voiceSearchBtn) voiceSearchBtn.style.display = 'none';
        showNotification('Voice search initialization failed', 'error');
    }
}

function updateVoiceStatus(status, message) {
    if (voiceStatus) {
        voiceStatus.textContent = message;
        voiceStatus.className = `voice-status ${status}`;
    }
}

function startVoiceRecognition() {
    console.log("Starting voice recognition...");
    
    if (!APP_STATE.recognition) {
        showNotification('Voice recognition not available. Please refresh the page.', 'error');
        return;
    }

    try {
        if (voiceModal) voiceModal.classList.add('active');
        updateVoiceStatus('ready', 'Click to speak...');
        if (voiceTranscript) voiceTranscript.textContent = 'Listening for city name...';

        APP_STATE.recognition.start();

        setTimeout(() => {
            if (voiceStatus && (voiceStatus.textContent === 'Listening... Speak now!' || 
                voiceStatus.textContent === 'Click to speak...')) {
                updateVoiceStatus('timeout', 'No speech detected. Try again.');
                showNotification('No speech detected. Please try speaking.', 'warning');
                stopVoiceRecognition();
            }
        }, 5000);

    } catch (error) {
        console.error("Error starting voice recognition:", error);
        showNotification('Cannot start voice recognition. Please try again.', 'error');
        stopVoiceRecognition();
    }
}

function stopVoiceRecognition() {
    console.log("Stopping voice recognition...");
    
    if (APP_STATE.recognition) {
        try {
            APP_STATE.recognition.stop();
        } catch (e) {
        }
    }

    if (voiceSearchBtn) voiceSearchBtn.classList.remove('listening');
    if (voiceWave) voiceWave.classList.remove('listening');

    setTimeout(() => {
        if (voiceModal) voiceModal.classList.remove('active');
        updateVoiceStatus('ready', 'Click to speak...');
        if (voiceTranscript) voiceTranscript.textContent = 'Listening for city name...';
    }, 1000);
}

function processVoiceCommand(command) {
    console.log("Processing voice command:", command);

    if (!command || command.trim() === '') {
        showNotification('No speech detected. Please try again.', 'warning');
        return;
    }

    command = command.toLowerCase().trim();

    let searchQuery = command;
    
    const phrasesToRemove = [
        'weather in', 'weather for', 'weather at', 'in', 'for', 'at', 
        'the weather', 'show me', 'get me', 'find', 'search for'
    ];
    
    phrasesToRemove.forEach(phrase => {
        if (searchQuery.includes(phrase)) {
            searchQuery = searchQuery.replace(phrase, '').trim();
        }
    });

    const fillerWords = ['weather', 'city', 'of', 'please', 'thanks', 'thank you'];
    const words = searchQuery.split(' ').filter(word => !fillerWords.includes(word));
    searchQuery = words.join(' ').trim();

    if (!searchQuery) {
        showNotification('Please specify a city name.', 'warning');
        return;
    }

    if (APP_STATE.locationDatabase.states[searchQuery]) {
        cityInput.value = capitalizeFirstLetter(searchQuery);
        universalWeatherSearch(searchQuery);
        showNotification(`Searching for ${capitalizeFirstLetter(searchQuery)} state...`, 'success');
        return;
    }

    if (APP_STATE.locationDatabase.countries[searchQuery]) {
        cityInput.value = capitalizeFirstLetter(searchQuery);
        universalWeatherSearch(searchQuery);
        showNotification(`Searching for ${capitalizeFirstLetter(searchQuery)} country...`, 'success');
        return;
    }

    const commonCities = [
        'delhi', 'mumbai', 'london', 'new york', 'tokyo', 'paris', 
        'dubai', 'singapore', 'sydney', 'toronto', 'berlin'
    ];
    
    for (const city of commonCities) {
        if (searchQuery.includes(city)) {
            searchQuery = city;
            break;
        }
    }

    searchQuery = searchQuery.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    if (cityInput) cityInput.value = searchQuery;
    universalWeatherSearch(searchQuery);

    showNotification(`Searching for "${searchQuery}"...`, 'info');
}

function loadRecentSearches() {
    updateRecentSearchesDisplay();
}

function addToRecentSearches(city) {
    APP_STATE.recentSearches = APP_STATE.recentSearches.filter(item =>
        item.toLowerCase() !== city.toLowerCase()
    );

    APP_STATE.recentSearches.unshift(city);
    APP_STATE.recentSearches = APP_STATE.recentSearches.slice(0, 5);

    localStorage.setItem('recentSearches', JSON.stringify(APP_STATE.recentSearches));
    updateRecentSearchesDisplay();
}

function updateRecentSearchesDisplay() {
    if (!recentSearchesList) return;
    
    recentSearchesList.innerHTML = '';

    APP_STATE.recentSearches.forEach(city => {
        const item = document.createElement('div');
        item.className = 'recent-item';
        item.innerHTML = `
            <i class="fas fa-history"></i>
            <span>${city}</span>
        `;
        item.addEventListener('click', () => {
            if (cityInput) cityInput.value = city;
            universalWeatherSearch(city);
        });
        recentSearchesList.appendChild(item);
    });
}

function loadFavorites() {
    updateFavoritesDisplay();
}

function toggleFavorite(city) {
    const index = APP_STATE.favorites.indexOf(city);

    if (index === -1) {
        APP_STATE.favorites.push(city);
        showNotification(`Added ${city} to favorites`, 'success');
    } else {
        APP_STATE.favorites.splice(index, 1);
        showNotification(`Removed ${city} from favorites`, 'warning');
    }

    localStorage.setItem('weatherFavorites', JSON.stringify(APP_STATE.favorites));
    updateFavoritesDisplay();
}

function isFavorite(city) {
    return APP_STATE.favorites.includes(city);
}

function updateFavoritesDisplay() {
    if (!favoritesList) return;
    
    favoritesList.innerHTML = '';

    APP_STATE.favorites.forEach(city => {
        const item = document.createElement('div');
        item.className = 'favorite-item';
        item.innerHTML = `
            <i class="fas fa-star fav-star"></i>
            <span>${city}</span>
            <i class="fas fa-times remove-fav"></i>
        `;

        item.addEventListener('click', (e) => {
            if (!e.target.classList.contains('remove-fav')) {
                if (cityInput) cityInput.value = city;
                universalWeatherSearch(city);
            }
        });

        const removeBtn = item.querySelector('.remove-fav');
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(city);
        });

        favoritesList.appendChild(item);
    });
}

function universalWeatherSearch(query) {
    if (!query) return;
    
    const lowerQuery = query.toLowerCase().trim();
    APP_STATE.currentCity = query;

    if (weatherContainer) {
        weatherContainer.innerHTML = `
            <div class="loading-container">
                <div class="weather-loader">
                    <div class="loader-circle"></div>
                    <div class="loader-text">Searching for "${query}"...</div>
                </div>
            </div>
        `;
    }

    if (dataSourceElement) {
        dataSourceElement.textContent = "Source: Connecting...";
    }
    
    updateApiStatus('warning', 'Connecting...');

    addToRecentSearches(query);

    if (APP_STATE.locationDatabase.states[lowerQuery]) {
        showLocationOptions(lowerQuery, 'state');
        return;
    }

    if (APP_STATE.locationDatabase.countries[lowerQuery]) {
        showLocationOptions(lowerQuery, 'country');
        return;
    }

    getWeatherDataWithRetry(query, 3);
}

async function getWeatherDataWithRetry(city, retries) {
    try {
        await getWeatherData(city);
    } catch (error) {
        if (retries > 0) {
            console.log(`Retrying... ${retries} attempts left`);
            showNotification(`Retrying search for ${city}...`, 'warning');
            setTimeout(() => getWeatherDataWithRetry(city, retries - 1), 1000);
        } else {
            console.error("All attempts failed:", error);
            showError(`Failed to get weather for ${city}. Please try another location.`);
        }
    }
}

function showLocationOptions(locationName, type) {
    const locationData = APP_STATE.locationDatabase[type + 's'][locationName];
    const displayName = capitalizeFirstLetter(locationName);
    const icon = type === 'state' ? '🏛️' : '🌍';

    if (weatherContainer) {
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
}

async function getWeatherData(city) {
    console.log("Fetching weather for:", city);

    if (weatherContainer) {
        weatherContainer.innerHTML = `
            <div class="loading-container">
                <div class="weather-loader">
                    <div class="loader-circle"></div>
                    <div class="loader-text">Detecting weather for ${city}...</div>
                </div>
            </div>
        `;
    }

    if (dataSourceElement) {
        dataSourceElement.textContent = "Source: Connecting...";
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${APP_STATE.API_KEYS.openWeather}&units=metric`
        );

        console.log("OpenWeather Response:", response.status);

        if (response.status === 401) {
            console.log("API key issue, switching to free API");
            throw new Error('API key not activated yet');
        }

        if (!response.ok) {
            console.log("OpenWeather failed, trying fallback");
            throw new Error('City not found in OpenWeather');
        }

        const data = await response.json();
        console.log("OpenWeather data received");

        if (dataSourceElement) {
            dataSourceElement.textContent = "Source: OpenWeatherMap • Live";
        }
        updateApiStatus('active', 'Online');

        const forecastData = await getForecastData(data.coord.lat, data.coord.lon);
        const aqiData = await getAirQualityData(data.coord.lat, data.coord.lon);

        APP_STATE.currentWeather = {
            ...data,
            forecast: forecastData,
            airQuality: aqiData
        };

        updateCurrentWeatherDisplay();
        if (forecastData.hourly) updateHourlyForecast(forecastData.hourly);
        if (forecastData.daily) update5DayForecast(forecastData.daily);
        if (aqiData) updateAirQualityDisplay(aqiData);
        updateMapLocation(data.coord.lat, data.coord.lon);
        updateWeatherSuggestions(data);

        showNotification(`Weather data for ${city} loaded`, 'success');

    } catch (error) {
        console.log("OpenWeather failed:", error.message);
        updateApiStatus('error', 'Offline');

        try {
            await useFreeWeatherAPI(city);
        } catch (freeError) {
            console.error("All APIs failed:", freeError);
            showError('Weather service unavailable. Please try again later.');
            updateApiStatus('error', 'Offline');
        }
    }
}

async function getForecastData(lat, lon) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APP_STATE.API_KEYS.openWeather}&units=metric`
        );

        if (!response.ok) {
            console.log("Forecast API failed, returning empty data");
            return { hourly: [], daily: [] };
        }

        const data = await response.json();

        const hourly = data.list.slice(0, 8).map(item => ({
            time: new Date(item.dt * 1000).getHours(),
            temp: item.main.temp,
            icon: item.weather[0].icon,
            description: item.weather[0].description,
            rain: item.pop * 100
        }));

        const daily = {};
        data.list.forEach(item => {
            const date = new Date(item.dt * 1000).toDateString();
            if (!daily[date]) {
                daily[date] = {
                    temps: [],
                    conditions: [],
                    rain: []
                };
            }
            daily[date].temps.push(item.main.temp);
            daily[date].conditions.push(item.weather[0].main);
            daily[date].rain.push(item.pop * 100);
        });

        const processedDaily = Object.keys(daily).slice(0, 5).map(date => {
            const dayData = daily[date];
            return {
                date: date,
                day: new Date(date).toLocaleDateString('en-US', { weekday: 'short' }),
                high: Math.max(...dayData.temps),
                low: Math.min(...dayData.temps),
                condition: dayData.conditions[0],
                rainChance: Math.max(...dayData.rain)
            };
        });

        return { hourly, daily: processedDaily };

    } catch (error) {
        console.log("Forecast API failed:", error);
        return { hourly: [], daily: [] };
    }
}

async function getAirQualityData(lat, lon) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${APP_STATE.API_KEYS.openWeather}`
        );

        if (!response.ok) {
            console.log("Air quality API failed");
            return null;
        }

        const data = await response.json();
        const aqi = data.list[0].main.aqi;
        const components = data.list[0].components;

        return {
            aqi,
            components,
            category: getAQICategory(aqi),
            recommendations: getHealthRecommendations(aqi)
        };

    } catch (error) {
        console.log("Air quality API failed:", error);
        return null;
    }
}

async function useFreeWeatherAPI(city) {
    console.log("Trying free weather API for:", city);

    try {
        const locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
        );

        const locationData = await locationResponse.json();

        if (!locationData.results || locationData.results.length === 0) {
            throw new Error('City not found in any service');
        }

        const { latitude, longitude, name, country } = locationData.results[0];
        console.log("Found location:", name, country);

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&forecast_days=5`
        );

        const weatherData = await weatherResponse.json();

        const processedData = {
            name: name,
            country: country,
            main: {
                temp: weatherData.current.temperature_2m,
                feels_like: weatherData.current.apparent_temperature,
                humidity: weatherData.current.relative_humidity_2m
            },
            wind: {
                speed: weatherData.current.wind_speed_10m
            },
            weather: [{
                main: getWeatherFromCode(weatherData.current.weather_code),
                description: getWeatherDescription(weatherData.current.weather_code),
                icon: getWeatherIconFromCode(weatherData.current.weather_code)
            }],
            forecast: {
                hourly: [],
                daily: weatherData.daily.time.slice(0, 5).map((date, index) => ({
                    date: date,
                    day: new Date(date).toLocaleDateString('en-US', { weekday: 'short' }),
                    high: weatherData.daily.temperature_2m_max[index],
                    low: weatherData.daily.temperature_2m_min[index],
                    condition: getWeatherFromCode(weatherData.daily.weather_code[index]),
                    rainChance: weatherData.daily.precipitation_probability_max[index]
                }))
            }
        };

        if (dataSourceElement) {
            dataSourceElement.textContent = "Source: Open-Meteo • Free API";
        }
        updateApiStatus('active', 'Online (Free)');

        APP_STATE.currentWeather = processedData;

        updateCurrentWeatherDisplay();
        update5DayForecast(processedData.forecast.daily);
        updateWeatherSuggestions(processedData);

        showNotification(`Using free weather data for ${name}`, 'warning');

    } catch (error) {
        console.error("Free weather API failed:", error);
        throw error;
    }
}

function updateCurrentWeatherDisplay() {
    if (!APP_STATE.currentWeather || !weatherContainer) return;

    const data = APP_STATE.currentWeather;
    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    const isFavoriteCity = isFavorite(data.name);
    const weatherIcon = getWeatherIcon(data.weather[0].main, data.weather[0].icon);
    const temperature = convertTemperature(data.main.temp);
    const feelsLike = convertTemperature(data.main.feels_like);

    weatherContainer.innerHTML = `
        <div class="weather-card">
            <div class="location-info">
                <div class="location-header">
                    <h2 class="city-name">${data.name}</h2>
                    <button class="favorite-btn ${isFavoriteCity ? 'active' : ''}" onclick="toggleFavorite('${data.name}')">
                        <i class="fas fa-star"></i>
                    </button>
                </div>
                <div class="country-name">${data.sys?.country || data.country}</div>
            </div>
            
            <div class="weather-main-info">
                <div class="temperature">${temperature}${getTemperatureUnit()}</div>
                <div class="weather-condition">
                    <i class="fas ${weatherIcon} condition-icon"></i>
                    <span class="condition-text">${capitalizeFirstLetter(data.weather[0].description)}</span>
                </div>
            </div>
            
            <div class="weather-details">
                <div class="detail-card">
                    <div class="detail-icon">🌡️</div>
                    <div class="detail-label">Feels Like</div>
                    <div class="detail-value">${feelsLike}${getTemperatureUnit()}</div>
                </div>
                <div class="detail-card">
                    <div class="detail-icon">💧</div>
                    <div class="detail-label">Humidity</div>
                    <div class="detail-value">${data.main.humidity}%</div>
                </div>
                <div class="detail-card">
                    <div class="detail-icon">💨</div>
                    <div class="detail-label">Wind Speed</div>
                    <div class="detail-value">${data.wind.speed} ${data.wind.speed ? 'm/s' : 'km/h'}</div>
                </div>
                <div class="detail-card">
                    <div class="detail-icon">🕒</div>
                    <div class="detail-label">Updated</div>
                    <div class="detail-value">${currentTime}</div>
                </div>
            </div>
        </div>
    `;

    const hourlyLocation = document.getElementById('hourlyLocation');
    const forecastLocation = document.getElementById('forecastLocation');
    const aqiLocation = document.getElementById('aqiLocation');
    
    if (hourlyLocation) hourlyLocation.textContent = data.name;
    if (forecastLocation) forecastLocation.textContent = data.name;
    if (aqiLocation) aqiLocation.textContent = data.name;
}

function updateTemperatureDisplay() {
    if (!APP_STATE.currentWeather) return;

    const tempElements = document.querySelectorAll('.temperature, .detail-value');
    tempElements.forEach(element => {
        if (element.textContent.includes('°')) {
            const temp = parseInt(element.textContent);
            if (!isNaN(temp)) {
                const newTemp = APP_STATE.isCelsius ?
                    Math.round((temp - 32) * 5 / 9) :
                    Math.round((temp * 9 / 5) + 32);
                element.textContent = `${newTemp}${getTemperatureUnit()}`;
            }
        }
    });
}

function updateHourlyForecast(hourlyData) {
    if (!hourlyTimeline) return;
    
    if (!hourlyData || hourlyData.length === 0) {
        hourlyTimeline.innerHTML = `
            <div class="no-data">
                <i class="fas fa-clock"></i>
                <p>Hourly forecast unavailable</p>
            </div>
        `;
        return;
    }

    hourlyTimeline.innerHTML = '';

    hourlyData.forEach(hour => {
        const hourItem = document.createElement('div');
        hourItem.className = 'hourly-item';

        const time = hour.time >= 12 ?
            `${hour.time === 12 ? 12 : hour.time - 12} PM` :
            `${hour.time === 0 ? 12 : hour.time} AM`;

        const temp = convertTemperature(hour.temp);
        const icon = getWeatherIcon(hour.description);

        hourItem.innerHTML = `
            <div class="hourly-time">${time}</div>
            <div class="hourly-icon"><i class="fas ${icon}"></i></div>
            <div class="hourly-temp">${temp}°</div>
            <div class="hourly-rain">${Math.round(hour.rain || 0)}%</div>
        `;

        hourlyTimeline.appendChild(hourItem);
    });

    updateHourlyChart(hourlyData);
}

function updateHourlyChart(hourlyData) {
    const ctx = document.getElementById('hourlyChart')?.getContext('2d');
    if (!ctx) return;

    if (APP_STATE.hourlyChart) {
        APP_STATE.hourlyChart.destroy();
    }

    const labels = hourlyData.map(hour =>
        hour.time >= 12 ?
            `${hour.time === 12 ? 12 : hour.time - 12} PM` :
            `${hour.time === 0 ? 12 : hour.time} AM`
    );

    const temperatures = hourlyData.map(hour => convertTemperature(hour.temp));

    APP_STATE.hourlyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature',
                data: temperatures,
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        callback: function (value) {
                            return value + getTemperatureUnit();
                        }
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            }
        }
    });
}

function update5DayForecast(dailyData) {
    if (!forecastDays) return;
    
    if (!dailyData || dailyData.length === 0) {
        forecastDays.innerHTML = `
            <div class="no-data">
                <i class="fas fa-calendar-alt"></i>
                <p>5-day forecast unavailable</p>
            </div>
        `;
        return;
    }

    forecastDays.innerHTML = '';

    dailyData.forEach(day => {
        const dayItem = document.createElement('div');
        dayItem.className = 'forecast-day';

        const highTemp = convertTemperature(day.high);
        const lowTemp = convertTemperature(day.low);
        const icon = getWeatherIcon(day.condition);

        dayItem.innerHTML = `
            <div class="day-info">
                <div class="day-name">${day.day}</div>
                <div class="day-icon"><i class="fas ${icon}"></i></div>
                <div class="day-condition">${day.condition}</div>
            </div>
            <div class="day-temps">
                <div class="day-high">${highTemp}°</div>
                <div class="day-low">${lowTemp}°</div>
                <div class="day-rain">${Math.round(day.rainChance || 0)}%</div>
            </div>
        `;

        forecastDays.appendChild(dayItem);
    });
}

function updateAirQualityDisplay(aqiData) {
    if (!aqiMeter) return;
    
    if (!aqiData) {
        aqiMeter.innerHTML = `
            <div class="no-data">
                <i class="fas fa-wind"></i>
                <p>Air quality data unavailable</p>
            </div>
        `;
        return;
    }

    const aqi = aqiData.aqi;
    const category = aqiData.category;
    const color = getAQIColor(aqi);

    aqiMeter.innerHTML = `
        <div class="aqi-scale">
            <div class="aqi-segment good"><span>0-50</span></div>
            <div class="aqi-segment moderate"><span>51-100</span></div>
            <div class="aqi-segment unhealthy"><span>101-150</span></div>
            <div class="aqi-segment very-unhealthy"><span>151-200</span></div>
            <div class="aqi-segment hazardous"><span>201+</span></div>
        </div>
        <div class="aqi-indicator" style="left: ${calculateAQIPosition(aqi)}%">
            <div class="needle"></div>
            <div class="circle"></div>
        </div>
        <div class="aqi-value" style="color: ${color}">${aqi}</div>
        <div class="aqi-category" style="color: ${color}">${category}</div>
    `;

    updateAQIComponents(aqiData.components);
    updateHealthRecommendations(aqiData.recommendations);
}

function calculateAQIPosition(aqi) {
    return Math.min((aqi / 300) * 100, 100);
}

function updateAQIComponents(components) {
    if (!components || !aqiComponents) return;

    aqiComponents.innerHTML = '';

    const pollutants = [
        { key: 'co', name: 'CO', unit: 'μg/m³' },
        { key: 'no', name: 'NO', unit: 'μg/m³' },
        { key: 'no2', name: 'NO₂', unit: 'μg/m³' },
        { key: 'o3', name: 'O₃', unit: 'μg/m³' },
        { key: 'so2', name: 'SO₂', unit: 'μg/m³' },
        { key: 'pm2_5', name: 'PM2.5', unit: 'μg/m³' },
        { key: 'pm10', name: 'PM10', unit: 'μg/m³' },
        { key: 'nh3', name: 'NH₃', unit: 'μg/m³' }
    ];

    pollutants.forEach(pollutant => {
        if (components[pollutant.key]) {
            const component = document.createElement('div');
            component.className = 'aqi-component';
            component.innerHTML = `
                <div class="component-name">${pollutant.name}</div>
                <div class="component-value">${components[pollutant.key].toFixed(1)}</div>
                <div class="component-unit">${pollutant.unit}</div>
            `;
            aqiComponents.appendChild(component);
        }
    });
}

function updateHealthRecommendations(recommendations) {
    if (!recommendations || !healthRecommendations) return;

    healthRecommendations.innerHTML = `
        <h4>Health Recommendations</h4>
        <ul>
            ${recommendations.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
    `;
}

function initMap() {
    if (!weatherMap) return;

    APP_STATE.map = L.map('weatherMap').setView([28.7041, 77.1025], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(APP_STATE.map);

    const marker = L.marker([28.7041, 77.1025]).addTo(APP_STATE.map);
    marker.bindPopup("Delhi").openPopup();

    const mapLat = document.getElementById('mapLat');
    const mapLon = document.getElementById('mapLon');
    if (mapLat) mapLat.textContent = '28.7041';
    if (mapLon) mapLon.textContent = '77.1025';
}

function updateMapLocation(lat, lon) {
    if (!APP_STATE.map) return;

    APP_STATE.map.setView([lat, lon], 10);

    APP_STATE.map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            APP_STATE.map.removeLayer(layer);
        }
    });

    const marker = L.marker([lat, lon]).addTo(APP_STATE.map);
    marker.bindPopup(APP_STATE.currentWeather?.name || 'Location').openPopup();

    const mapLat = document.getElementById('mapLat');
    const mapLon = document.getElementById('mapLon');
    if (mapLat) mapLat.textContent = lat.toFixed(4);
    if (mapLon) mapLon.textContent = lon.toFixed(4);
}

function updateMapTheme() {
    if (!APP_STATE.map) return;

    APP_STATE.map.eachLayer(layer => {
        if (layer instanceof L.TileLayer) {
            APP_STATE.map.removeLayer(layer);
        }
    });

    const tileUrl = APP_STATE.isDarkTheme ?
        'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' :
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    L.tileLayer(tileUrl, {
        attribution: APP_STATE.isDarkTheme ?
            '© CARTO' :
            '© OpenStreetMap contributors'
    }).addTo(APP_STATE.map);
}

function updateWeatherSuggestions(weatherData) {
    if (!weatherData || !suggestionsGrid) return;

    const temp = weatherData.main.temp;
    const condition = weatherData.weather[0].main.toLowerCase();
    const humidity = weatherData.main.humidity;
    const windSpeed = weatherData.wind.speed;

    const suggestions = [];

    if (temp < 10) {
        suggestions.push({
            icon: 'fa-scarf',
            title: 'Winter Wear',
            desc: 'Wear heavy jacket, scarf, gloves'
        });
    } else if (temp < 20) {
        suggestions.push({
            icon: 'fa-jacket',
            title: 'Light Jacket',
            desc: 'Carry a light jacket or sweater'
        });
    } else {
        suggestions.push({
            icon: 'fa-tshirt',
            title: 'Light Clothing',
            desc: 'Comfortable light clothing recommended'
        });
    }

    if (condition.includes('clear') || condition.includes('sunny')) {
        suggestions.push({
            icon: 'fa-hiking',
            title: 'Outdoor Activities',
            desc: 'Perfect for hiking or outdoor sports'
        });
    } else if (condition.includes('rain')) {
        suggestions.push({
            icon: 'fa-umbrella',
            title: 'Indoor Activities',
            desc: 'Stay indoors or carry umbrella'
        });
    } else if (condition.includes('snow')) {
        suggestions.push({
            icon: 'fa-skiing',
            title: 'Winter Sports',
            desc: 'Great for skiing or snow activities'
        });
    }

    if (humidity > 80) {
        suggestions.push({
            icon: 'fa-tint',
            title: 'Stay Hydrated',
            desc: 'High humidity, drink plenty of water'
        });
    }

    if (windSpeed > 10) {
        suggestions.push({
            icon: 'fa-wind',
            title: 'Wind Protection',
            desc: 'Strong winds, protect eyes and face'
        });
    }

    suggestions.push({
        icon: 'fa-sun',
        title: 'UV Protection',
        desc: 'Use sunscreen during daytime'
    });

    suggestionsGrid.innerHTML = '';

    suggestions.forEach(suggestion => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.innerHTML = `
            <div class="suggestion-icon"><i class="fas ${suggestion.icon}"></i></div>
            <div class="suggestion-title">${suggestion.title}</div>
            <div class="suggestion-desc">${suggestion.desc}</div>
        `;
        suggestionsGrid.appendChild(item);
    });
}

function toggleWeatherSounds() {
    const condition = APP_STATE.currentWeather?.weather[0]?.main?.toLowerCase();

    if (!condition) {
        showNotification('No weather data available for sounds', 'warning');
        return;
    }

    APP_STATE.soundPlaying = !APP_STATE.soundPlaying;

    if (APP_STATE.soundPlaying) {
        if (condition.includes('rain') || condition.includes('drizzle')) {
            APP_STATE.sounds.rain?.play().catch(e => console.log("Sound play error:", e));
        } else if (condition.includes('wind') || condition.includes('breeze')) {
            APP_STATE.sounds.wind?.play().catch(e => console.log("Sound play error:", e));
        } else if (condition.includes('thunder') || condition.includes('storm')) {
            APP_STATE.sounds.thunder?.play().catch(e => console.log("Sound play error:", e));
        } else {
            APP_STATE.sounds.rain?.play().catch(e => console.log("Sound play error:", e));
        }

        if (soundsToggle) {
            soundsToggle.classList.add('playing');
            soundsToggle.innerHTML = '<i class="fas fa-pause"></i> Pause';
        }
        startSoundProgress();

        showNotification('Playing ambient weather sounds', 'success');
    } else {
        Object.values(APP_STATE.sounds).forEach(sound => {
            if (sound) {
                sound.pause();
                sound.currentTime = 0;
            }
        });

        if (soundsToggle) {
            soundsToggle.classList.remove('playing');
            soundsToggle.innerHTML = '<i class="fas fa-play"></i> Play';
        }

        showNotification('Stopped weather sounds', 'warning');
    }
}

function startSoundProgress() {
    const progressBar = document.getElementById('soundProgressBar');
    if (!progressBar) return;

    let progress = 0;

    const interval = setInterval(() => {
        if (!APP_STATE.soundPlaying) {
            clearInterval(interval);
            progressBar.style.width = '0%';
            return;
        }

        progress = (progress + 1) % 100;
        progressBar.style.width = `${progress}%`;
    }, 100);
}

function shareWeather() {
    if (!APP_STATE.currentWeather) {
        showNotification('No weather data to share', 'warning');
        return;
    }

    const data = APP_STATE.currentWeather;
    const temp = convertTemperature(data.main.temp);
    const unit = getTemperatureUnit();
    const condition = data.weather[0].description;

    const text = `Weather in ${data.name}: ${temp}${unit}, ${condition}. Check it out!`;
    const url = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: 'Weather Forecast',
            text: text,
            url: url
        }).catch(err => {
            console.log('Share cancelled:', err);
        });
    } else if (navigator.clipboard) {
        navigator.clipboard.writeText(`${text} ${url}`).then(() => {
            showNotification('Weather info copied to clipboard!', 'success');
        }).catch(err => {
            showNotification('Failed to share weather', 'error');
        });
    } else {
        showNotification('Sharing not supported in your browser', 'warning');
    }
}

function detectLocation() {
    if (!navigator.geolocation) {
        showNotification('Geolocation not supported', 'error');
        updateGpsStatus('error', 'Not Supported');
        return;
    }

    updateGpsStatus('warning', 'Detecting...');

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
                );

                const data = await response.json();
                const city = data.address.city || data.address.town || data.address.village;

                if (city) {
                    if (cityInput) cityInput.value = city;
                    universalWeatherSearch(city);
                    updateGpsStatus('active', 'Located');
                    showNotification(`Detected location: ${city}`, 'success');
                } else {
                    throw new Error('City not found');
                }

            } catch (error) {
                console.log('Reverse geocoding failed:', error);
                updateGpsStatus('error', 'Failed');
                showNotification('Could not determine city name from location', 'error');
            }
        },
        (error) => {
            console.log('Geolocation error:', error);
            updateGpsStatus('error', 'Denied');

            let message = 'Location access denied';
            if (error.code === error.PERMISSION_DENIED) {
                message = 'Please allow location access in browser settings';
            } else if (error.code === error.POSITION_UNAVAILABLE) {
                message = 'Location information unavailable';
            } else if (error.code === error.TIMEOUT) {
                message = 'Location request timed out';
            }

            showNotification(message, 'error');
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

function monitorSystem() {
    updateApiStatus('active', 'Online');

    if (APP_STATE.recentSearches.length > 0) {
        updateCacheStatus('active', `${APP_STATE.recentSearches.length} items`);
    }

    window.addEventListener('online', () => {
        updateApiStatus('active', 'Online');
        showNotification('Back online', 'success');
    });

    window.addEventListener('offline', () => {
        updateApiStatus('error', 'Offline');
        showNotification('You are offline', 'error');
    });
}

function updateApiStatus(status, text) {
    if (!apiStatus) return;
    apiStatus.className = `status-indicator ${status}`;
    apiStatus.innerHTML = `<i class="fas fa-circle"></i> API: ${text}`;
}

function updateGpsStatus(status, text) {
    if (!gpsStatus) return;
    gpsStatus.className = `status-indicator ${status}`;
    gpsStatus.innerHTML = `<i class="fas fa-circle"></i> GPS: ${text}`;
}

function updateCacheStatus(status, text) {
    if (!cacheStatus) return;
    cacheStatus.className = `status-indicator ${status}`;
    cacheStatus.innerHTML = `<i class="fas fa-circle"></i> Cache: ${text}`;
}

function showNotification(message, type = 'info') {
    if (!notificationContainer) return;

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    const icon = type === 'success' ? 'fa-check-circle' :
        type === 'warning' ? 'fa-exclamation-triangle' :
            type === 'error' ? 'fa-times-circle' :
                'fa-info-circle';

    notification.innerHTML = `
        <div class="notification-icon"><i class="fas ${icon}"></i></div>
        <div class="notification-content">
            <div class="notification-title">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
            <div class="notification-message">${message}</div>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;

    notificationContainer.appendChild(notification);

    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);

    const closeBtn = notification.querySelector('.notification-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        });
    }
}

function showError(message) {
    if (dataSourceElement) {
        dataSourceElement.textContent = "Source: Service Unavailable";
    }

    if (weatherContainer) {
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
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getWeatherIcon(weatherMain, iconCode) {
    const iconMap = {
        'Clear': 'fa-sun',
        'Clouds': iconCode?.includes('d') ? 'fa-cloud-sun' : 'fa-cloud-moon',
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

function getWeatherFromCode(code) {
    const weatherCodes = {
        0: 'Clear', 1: 'Clear', 2: 'Clouds', 3: 'Clouds',
        45: 'Fog', 48: 'Fog', 51: 'Drizzle', 53: 'Drizzle',
        55: 'Drizzle', 61: 'Rain', 63: 'Rain', 65: 'Rain',
        80: 'Rain', 81: 'Rain', 82: 'Rain'
    };
    return weatherCodes[code] || 'Clouds';
}

function getWeatherDescription(code) {
    const descriptions = {
        0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
        45: 'Fog', 48: 'Fog', 51: 'Light drizzle', 53: 'Moderate drizzle',
        55: 'Dense drizzle', 61: 'Slight rain', 63: 'Moderate rain',
        65: 'Heavy rain', 80: 'Rain showers', 81: 'Moderate rain showers',
        82: 'Violent rain showers'
    };
    return descriptions[code] || 'Cloudy';
}

function getWeatherIconFromCode(code) {
    if (code === 0) return 'fa-sun';
    if (code <= 3) return 'fa-cloud-sun';
    if (code <= 55) return 'fa-cloud-drizzle';
    if (code <= 65) return 'fa-cloud-rain';
    if (code <= 82) return 'fa-cloud-showers-heavy';
    return 'fa-cloud';
}

function getAQICategory(aqi) {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
    if (aqi <= 200) return 'Unhealthy';
    if (aqi <= 300) return 'Very Unhealthy';
    return 'Hazardous';
}

function getAQIColor(aqi) {
    if (aqi <= 50) return '#00e400';
    if (aqi <= 100) return '#ffff00';
    if (aqi <= 150) return '#ff7e00';
    if (aqi <= 200) return '#ff0000';
    if (aqi <= 300) return '#8f3f97';
    return '#7e0023';
}

function getHealthRecommendations(aqi) {
    if (aqi <= 50) {
        return [
            'Air quality is satisfactory',
            'No health impacts expected',
            'Ideal for outdoor activities'
        ];
    } else if (aqi <= 100) {
        return [
            'Air quality is acceptable',
            'Unusually sensitive people should consider limiting outdoor exertion',
            'Generally safe for most activities'
        ];
    } else if (aqi <= 150) {
        return [
            'Members of sensitive groups may experience health effects',
            'Children, elderly, and those with respiratory issues should limit outdoor exertion',
            'General public unlikely to be affected'
        ];
    } else if (aqi <= 200) {
        return [
            'Everyone may begin to experience health effects',
            'Members of sensitive groups may experience more serious effects',
            'Avoid prolonged outdoor exertion'
        ];
    } else {
        return [
            'Health warning of emergency conditions',
            'Avoid all outdoor activities',
            'Stay indoors with windows closed',
            'Use air purifiers if available'
        ];
    }
}

function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabId}Tab`) {
                    content.classList.add('active');
                }
            });

            if (tabId === 'map' && APP_STATE.map) {
                setTimeout(() => {
                    APP_STATE.map.invalidateSize();
                }, 100);
            }
        });
    });
}

function setupEventListeners() {
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = cityInput ? cityInput.value.trim() : '';
            if (query) {
                universalWeatherSearch(query);
            } else {
                showNotification('Please enter a city, state, or country name', 'warning');
            }
        });
    }

    if (cityInput) {
        cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = cityInput.value.trim();
                if (query) {
                    universalWeatherSearch(query);
                }
            }
        });
    }

    if (voiceSearchBtn) {
        voiceSearchBtn.addEventListener('click', startVoiceRecognition);
    }
    
    if (voiceClose) {
        voiceClose.addEventListener('click', stopVoiceRecognition);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (tempToggle) {
        tempToggle.addEventListener('click', toggleTemperatureUnit);
    }

    if (autoLocation) {
        autoLocation.addEventListener('click', detectLocation);
    }

    document.querySelectorAll('.city-chip').forEach(button => {
        button.addEventListener('click', () => {
            const city = button.getAttribute('data-city');
            if (cityInput) cityInput.value = city;
            universalWeatherSearch(city);
        });
    });

    if (soundsToggle) {
        soundsToggle.addEventListener('click', toggleWeatherSounds);
    }

    if (shareBtn) {
        shareBtn.addEventListener('click', shareWeather);
    }
    
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            if (APP_STATE.currentCity) {
                universalWeatherSearch(APP_STATE.currentCity);
                showNotification('Refreshing weather data...', 'info');
            }
        });
    }

    setupTabs();

    document.addEventListener('submit', (e) => e.preventDefault());
}

document.addEventListener('DOMContentLoaded', initApp);

window.universalWeatherSearch = universalWeatherSearch;
window.getWeatherData = getWeatherData;
window.toggleFavorite = toggleFavorite;
window.detectLocation = detectLocation;
window.shareWeather = shareWeather;
window.toggleWeatherSounds = toggleWeatherSounds;