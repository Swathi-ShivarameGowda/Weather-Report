import React from 'react';
import PropTypes from 'prop-types';
import { currentWeather, getDateSuffix, convertDay, convertMonth, weather } from '../utils';


export default function MainWeatherCard({ value, weatherReport }) {

	const weatherSymbol = weatherReport?.properties?.timeseries[0]?.data?.next_1_hours?.summary?.symbol_code;
	const temperature = weatherReport?.properties?.timeseries[0]?.data?.instant?.details?.air_temperature;

	let now = new Date();
	
	return (
		<div className="main-forecast">
			<div><h2>{value}, Germany</h2>
				<h3>{convertDay(now.getDay())} {getDateSuffix(now.getDate())}, {convertMonth(now.getMonth())}</h3>
				<h2>{Math.round(temperature)} &deg;C {weather(weatherSymbol)}</h2>
			</div>
			<div>{currentWeather(weatherSymbol)}</div>
		</div>
	);
}

MainWeatherCard.propTypes = {
	value: PropTypes.string,
	weatherReport: PropTypes.object
};