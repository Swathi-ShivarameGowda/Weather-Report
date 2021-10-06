import React, { useState } from 'react';
import AutoComplete from './components/AutoComplete';
import MainWeatherCard from './components/MainWeatherCard';
import Background from './img/weather_background.jpg';
import ForecastCards from './components/ForecastCards';
import WeekForecast from './components/WeekForecast';
import './App.css';

export default function App() {
	const [value, setValue] = useState('');
	const [weatherReport, setWeatherReport] = useState();

	return (
		<div className="root" style={{
			backgroundImage: "url(" + Background + ")",
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat'
		}}>
			<div>
				<h1>
					Weather Forecast
				</h1>
			</div>
			<AutoComplete value={value} setValue={setValue} setWeatherReport={setWeatherReport} />
			<br></br>
			{value && weatherReport &&
				<MainWeatherCard value={value} weatherReport={weatherReport} />
			}
			{value && weatherReport &&
				<div>
					<ForecastCards weatherReport={weatherReport} />
					<h3>Following days forecast</h3>
					<WeekForecast weatherReport={weatherReport} />
				</div>
			}
		</div>
	);
}

