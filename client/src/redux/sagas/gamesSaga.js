import { put, call } from 'redux-saga/effects';

import {
	fetchGamesRequest,
	gamesRequestSuccess,
	gamesRequestFaild,
} from './../actions/gamesActions';

import axios from './../../api/api-client';

import { append_ID } from './../../utils/helpers';

export function* gamesSaga() {
	yield put(fetchGamesRequest());
	try {
		const response = yield call(() => axios.get('/games'));
		append_ID(response.data);
		yield put(gamesRequestSuccess(response));
	} catch (error) {
		yield put(gamesRequestFaild(error));
	}
}

export default gamesSaga;
