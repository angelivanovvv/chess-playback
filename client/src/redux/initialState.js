import { fromJS } from 'immutable';

const initialState = fromJS({
	games: {
		isLoading: false,
		response: null,
		errors: null,
	},
});

export default initialState;
