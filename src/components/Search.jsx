import React from 'react';
import { connect } from 'react-redux';
import { loadWeather } from '../actions/index';
import './search.scss';

const Search = ({dispatch}) => {
	let input;
	
	return (
		<div>
			<form className="search" onSubmit={e => {
				e.preventDefault();
				if (!input.value.trim()) {
					return;
				}
				dispatch(loadWeather(input.value));
				input.value="";
			}}>
				<div className="search__wrap">
					<label className="search__label">Cities:</label>
					<input className="search__input" ref={node => { input = node; }} />
				</div>
				<button className="search__submit" type="submit">Submit</button>
			</form>
		</div>
	);
}

export default connect()(Search);