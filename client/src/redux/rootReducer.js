import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import gamesReducer from './reducers/gamesReducer';

const rootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		games: gamesReducer,
	});

export default rootReducer;
