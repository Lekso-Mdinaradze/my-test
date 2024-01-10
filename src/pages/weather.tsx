import React, { useEffect, useState } from 'react';

interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}


const WeatherPage: React.FC<any> = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const fetchWeatherData = async () => {
    try {
      const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3cf41b991f1e7904886436ac9ea90e9a`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch weather data. Status: ${response.status}`);
      }

      const data: WeatherData = await response.json();
      setWeatherData(data);
    } catch (error) {
    }
  };

  const handleGetWeather = () => {
    fetchWeatherData();
  };

  return (
    <div>
      <label htmlFor="cityInput">Enter City:</label>
      <input
        type="text"
        id="cityInput"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city name"
      />
      <button onClick={handleGetWeather}>Get Weather</button>

      {weatherData ? (
        <>
          <p>{`Current weather in ${city}:`}</p>
          <p>{`Temperature: ${weatherData.main.temp}°C`}</p>
          <p>{`Description: ${weatherData.weather[0].description}`}</p>
        </>
      ) : (
        <p>{city ? 'Loading weather data...' : 'Enter a city name and click "Get Weather"'}</p>
      )}
    </div>
  );
};

export default WeatherPage;

