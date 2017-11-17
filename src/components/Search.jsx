import React from 'react';
import { connect } from 'react-redux';
import { loadWeather } from '../actions/index';

const Search = ({dispatch}) => {
	let input;
	
	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault();
				if (!input.value.trim()) {
					return;
				}
				dispatch(loadWeather(input.value));
				input.value="";
			}}>
				<input ref={node => { input = node; }} />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default connect()(Search);