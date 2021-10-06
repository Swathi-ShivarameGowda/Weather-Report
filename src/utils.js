import React from 'react';
import { WiCloudy, WiCloud, WiRain, WiDaySunny, WiDaySunnyOvercast, WiShowers, WiStormShowers } from 'weather-icons-react';
import rainy from './img/rainy1.jpg';
import cloudy from './img/cloudy.jpg';
import partlyCloudy from './img/partlyCloudy.jpg';
import sunny from './img/sunny.jpg';
import fairDay from './img/fairDay.jpeg';
import lightRain from './img/lightRain.jpg';
import heavyRain from './img/heavyRain.jpg';
import clearSky from './img/clearSky.jpg';

export const currentWeather = (weatherSymbol) => {
	if (weatherSymbol === "cloudy") {
		return <WiCloudy size={200} color='#000' />;
	} else if (weatherSymbol === "rain") {
		return <WiRain size={200} color='#000' />;
	} else if (weatherSymbol === "partlycloudy_day" || weatherSymbol === "partlycloudy_night") {
		return <WiCloud size={200} color='#000' />;
	} else if (weatherSymbol === "clearsky_day") {
		return <WiDaySunny size={200} color='#000' />;
	} else if (weatherSymbol === "fair_day" || weatherSymbol === "fair_night") {
		return <WiDaySunnyOvercast size={200} color='#000' />;
	} else if (weatherSymbol === "lightrainshowers_day") {
		return <WiShowers size={200} color='#000' />;
	} else if (weatherSymbol === "heavyrain") {
		return <WiStormShowers size={200} color='#000' />;
	} else if (weatherSymbol === "rainshowers_day" || weatherSymbol === "rainshowers_night") {
		return <WiShowers size={200} color='#000' />;
	} else {
		return <WiDaySunnyOvercast size={200} color='#000' />;
	}
};

export const getWeatherIcons = (weatherSymbol) => {
	if (weatherSymbol === "cloudy") {
		return cloudy;
	} else if (weatherSymbol === "rain") {
		return rainy;
	} else if (weatherSymbol === "partlycloudy_day" || weatherSymbol === "partlycloudy_night") {
		return partlyCloudy;
	} else if (weatherSymbol === "clearsky_day" || weatherSymbol === "clearsky_night") {
		return clearSky;
	} else if (weatherSymbol === "fair_day" || weatherSymbol === "fair_night") {
		return fairDay;
	} else if (weatherSymbol === "lightrainshowers_day" || weatherSymbol === "lightrainshowers_night") {
		return lightRain;
	} else if (weatherSymbol === "heavyrain") {
		return heavyRain;
	} else if (weatherSymbol === "rainshowers_day" || weatherSymbol === "rainshowers_night") {
		return lightRain;
	} else {
		return sunny;
	}
};

export const todayWeather = (weatherSymbol) => {
	if (weatherSymbol === "cloudy") {
		return <WiCloudy size={50} color='#000' />;
	} else if (weatherSymbol === "rain") {
		return <WiRain size={50} color='#000' />;
	} else if (weatherSymbol === "partlycloudy_day" || weatherSymbol === "partlycloudy_night") {
		return <WiCloud size={50} color='#000' />;
	} else if (weatherSymbol === "clearsky_day" || weatherSymbol === "clearsky_night") {
		return <WiDaySunny size={50} color='#000' />;
	} else if (weatherSymbol === "fair_day" || weatherSymbol === "fair_night") {
		return <WiDaySunnyOvercast size={50} color='#000' />;
	} else if (weatherSymbol === "lightrainshowers_day" || weatherSymbol === "lightrainshowers_night") {
		return <WiShowers size={50} color='#000' />;
	} else if (weatherSymbol === "heavyrain") {
		return <WiStormShowers size={50} color='#000' />;
	} else if (weatherSymbol === "rainshowers_day" || weatherSymbol === "rainshowers_night") {
		return <WiShowers size={50} color='#000' />;
	} else {
		return <WiDaySunnyOvercast size={50} color='#000' />;
	}
};

export const weather = (symbolCode) => {
	if (symbolCode === "cloudy") {
		return "Cloudy Day";
	} else if (symbolCode === "partlycloudy_day" || symbolCode === "partlycloudy_night") {
		return "Partly Cloudy";
	} else if (symbolCode === "rain") {
		return "Rainy Day";
	} else if (symbolCode === "fair_day") {
		return "Fair Day";
	} else if (symbolCode === "fair_night") {
		return "Fair Night";
	} else if (symbolCode === "clearsky_day" || symbolCode === "clearsky_night") {
		return "Clear Sky";
	} else if (symbolCode === "lightrainshowers_day" || symbolCode === "lightrainshowers_night") {
		return "Light Rain";
	} else if (symbolCode === "heavyrain") {
		return "Heavy Rain";
	} else if (symbolCode === "rainshowers_day" || symbolCode === "rainshowers_night") {
		return "Rain showers";
	} else {
		return "Sunny";
	}

};

export const getDateSuffix = (date) => {
	if (date === 1 || date === 21 || date === 31)
		return date = date + "st";
	else if (date === 2)
		return date = date + "nd";
	else if (date === 3)
		return date = date + "rd";
	else
		return date = date + "th";
};


export const convertDay = (day) => {
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let weekDay = days[day];
	return weekDay;
};


export const convertMonth = (month) => {
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	let currentMonth = months[month];
	return currentMonth;
};