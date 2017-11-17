import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CityWeather from './CityWeather.jsx';

const CitiesWeatherList = state => {
	return (
	<table className="city-weather">
		<thead class="city-weather__header">
			<tr class="city-weather__header-row">
				<th class="city-weather__header-item">Bus ID</th>
				<th class="city-weather__header-item">Route Variant</th>
				<th class="city-weather__header-item">Status</th>
			</tr>
		</thead>
		<tbody class="city-weather__body">
			{state.cities.map(city => (
				<CityWeather key={city.id} name={city.name} temperature={city.main.temp} condition={city.weather[0].main} />
			))}
		</tbody>	
	</table>
	)
}

const mapStateToProps = state => {
  return {
    cities : state.cities
  }
}

export default connect(
  mapStateToProps
)(CitiesWeatherList)