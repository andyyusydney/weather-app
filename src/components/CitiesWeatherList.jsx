import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CityWeather from './CityWeather.jsx';

const CitiesWeatherList = state => {
	return (
	<table>
		<tbody>
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