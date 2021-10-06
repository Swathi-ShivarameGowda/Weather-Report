import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Autocomplete from 'react-autocomplete';

const german_cities_data = require('../data/german_cities_latlon.json');

export default function AutoComplete({ value, setValue, setWeatherReport}) {
	const cities = german_cities_data.map(x => {
		return x.name;
	});

	const getLatLon = value => {
		setValue(value);
		const [city] = german_cities_data.filter(d => d.name === value ? d : "");
		callWeatherApi(city);
	};

	const callWeatherApi = async (city) => {
		if (city) {
			const res = await axios.get('https://api.met.no/weatherapi/locationforecast/2.0/complete',
				{
					params: {
						lat: city.latitude,
						lon: city.longitude
					}
				});
			setWeatherReport(res.data);

		}
	};

	return (
		<div>
			<Autocomplete
				items={cities}
				shouldItemRender={(item, value
				) => item.toLowerCase()
					.indexOf(value.toLowerCase()) > -1}

				getItemValue={item => item}

				renderItem={(item, isHighlighted) =>
					<div style={{
						background: isHighlighted ?
							'#bcf5bc' : 'white'
					}} >
						{item}
					</div>
				}
				value={value}

				onChange={e => setValue(e.target.value)}

				onSelect={(val) => getLatLon(val)}

				inputProps={{
					style: {
						width: '400px', height: '30px',
						background: '#e4f3f7', outline: 'none',
						border: '2px outset',
						borderRadius: '18px', backgroundColor: 'white'
					},
					placeholder: 'Search City'
				}}
			/>
		</div>
	);
}

AutoComplete.propTypes = {
	value: PropTypes.string,
	setValue: PropTypes.func,
	setWeatherReport: PropTypes.func
};