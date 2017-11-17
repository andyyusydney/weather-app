import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import citiesWeatherReducer from './reducers/citiesWeatherReducer';
import App from './components/App.jsx';
import thunk from 'redux-thunk';

let store = createStore(citiesWeatherReducer, {cities: []}, compose(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('container')
);