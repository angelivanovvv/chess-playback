import { fromJS } from 'immutable';

const initialState = fromJS({
	games: {
		isLoading: false,
		errors: null,
		response: [],
	},
});

export default initialState;
