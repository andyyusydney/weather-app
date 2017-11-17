export function setCitiesWeather(cities = []) {
	return {
		type: 'set_cities_weather',
		cities
	}
}

export function loadWeather(cities = []) {
	return dispatch => {
		//dispatch(setLoadingStatus(true));

		let url = `https://api.openweathermap.org/data/2.5/group?id=${cities}&units=metric&appid=93b01bdc94a1e05f70334a0cf1d84b77`;
		if (isNaN(cities.split(',')[0])) {
			url = `https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=93b01bdc94a1e05f70334a0cf1d84b77`;
		}

		// API
		// By IDs: https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=93b01bdc94a1e05f70334a0cf1d84b77
		// By Name: https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=93b01bdc94a1e05f70334a0cf1d84b77
		return fetch(url)
			.then(response => {
				console.log("response=", response);

				if (response.status === 200) {
			        return response.json();
			    }

			    throw "Request failed";
			})
			.then(jsonResult => {
				if (jsonResult.list && jsonResult.list.length > 0) {
					dispatch(setCitiesWeather(jsonResult.list));
				} else {
					dispatch(setCitiesWeather([jsonResult]));
				}
			})
			.catch(err => {
				console.error(`Error: ${err}`);
			});
	}
}

/* todo: add loading state
export function setLoadingStatus(isLoading) {
	return {
		type: "IS_LOADING",
		isLoading
	}
}
*/