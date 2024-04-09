import { useSelector } from 'react-redux';
import '../../App/App.css';

export default function WeatherData() {
  const weather = useSelector((store) => store.weather);
  //console.log('weather data', weather);

  return (
    <div className="weather-container">
      {weather &&
        weather.map((forecast) => (
          <div key={forecast.id} className="weather-item">
            <div>{forecast.name}</div>
            <div>
              <img src={forecast.icon} alt={forecast.name} />
            </div>
            <div className="forecast-temp">{forecast.temp}°F</div>
          </div>
        ))}
    </div>
  );
}
