import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';

import { routerMiddleware } from 'connected-react-router/immutable';
import rootReducer from './rootReducer';

const initialState = fromJS({});

const initStore = (history, sagaMiddleware) =>
	createStore(
		rootReducer(history),
		initialState,
		composeWithDevTools(
			applyMiddleware(routerMiddleware(history), thunk, sagaMiddleware)
		)
	);
export default initStore;
