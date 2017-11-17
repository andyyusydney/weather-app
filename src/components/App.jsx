import React from 'react';
import CitiesWeatherList from './CitiesWeatherList.jsx';
import Search from './Search.jsx';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Search />
				<CitiesWeatherList />
			</div>
		);
	}
}