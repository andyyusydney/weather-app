import React from 'react';
import PropTypes from 'prop-types';

const CityWeather = ({name, temperature, condition}) => (
	<tr className="city-weather__body-row">
		<td className="city-weather__body-item">{name}</td>
		<td className="city-weather__body-item">{temperature}</td>
		<td className="city-weather__body-item">{condition}</td>
	</tr>
)

CityWeather.propTypes = {
	name: PropTypes.string.isRequired,
	temperature: PropTypes.number.isRequired,
	condition: PropTypes.string.isRequired
}

export default CityWeather