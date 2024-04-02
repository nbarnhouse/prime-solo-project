import { useSelector } from 'react-redux';
import './WeatherData.css';

export default function WeatherData() {
  const weather = useSelector((store) => store.weather);
  console.log('weather data', weather);

  return (
    <div className="weather-container">
      {weather &&
        weather.map((forecast) => (
          <div key={forecast.id} className="weather-item">
            <div>{forecast.name}</div>
            <div>
              <img
                className="weather-icon"
                src={forecast.icon}
                alt={forecast.name}
              />
            </div>
            <div className="forecast-temp">{forecast.temp}°F</div>
          </div>
        ))}
    </div>
  );
}

//Error is at line 10
//TypeError: undefined is not a function (near '...weather.map...')
