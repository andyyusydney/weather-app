const citiesWeatherReducer = (state=[], action) => {
	console.log("action=", action);
	switch (action.type) {
		case 'set_cities_weather':
			console.log("action.cities=", action.cities);
			return {
				cities: action.cities
			};
			break;
		default:
			return state;
	}
}

export default citiesWeatherReducer