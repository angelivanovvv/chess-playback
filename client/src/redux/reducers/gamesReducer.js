import * as actionTypes from './../../constants/actionTypes';
import initialState from '../initialState';

const gamesState = initialState.get('games');

const gamesReducer = (state = gamesState, { type, payload }) => {
	switch (type) {
		case actionTypes.FETCH_GAMES_REQUEST:
			return state
				.set('isLoading', true)
				.set('error', null)
				.set('response', null);
		case actionTypes.GAMES_REQUEST_SUCCESS:
			return state
				.set('isLoading', false)
				.set('error', null)
				.set('response', payload);
		case actionTypes.GAMES_REQUEST_FAILD:
			return state
				.set('isLoading', false)
				.set('error', payload)
				.set('response', []);
		default:
			return state;
	}
};

export default gamesReducer;
