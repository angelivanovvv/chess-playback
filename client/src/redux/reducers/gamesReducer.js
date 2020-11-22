// ADD ACTION TYPES
import initialState from '../initialState';

const gamesState = initialState.get('games');

// ADD PAYLOAD TO REDUCER - "payload"
const gamesReducer = (state = gamesState, { type }) => {
	switch (type) {
		default:
			return state;
	}
};

export default gamesReducer;
