import * as actionTypes from './../../constants/actionTypes';

import { transformResponse, transformError } from './../../utils/helpers';

export const fetchGamesRequest = () => ({
	type: actionTypes.FETCH_GAMES_REQUEST,
});

export const gamesRequestSuccess = (response) => ({
	type: actionTypes.GAMES_REQUEST_SUCCESS,
	payload: transformResponse(response),
});

export const gamesRequestFaild = (error) => ({
	type: actionTypes.GAMES_REQUEST_FAILD,
	payload: transformError(error),
});
