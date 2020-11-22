import { put, call } from 'redux-saga/effects';

import {
	fetchGamesRequest,
	gamesRequestSuccess,
	gamesRequestFaild,
} from './../actions/gamesActions';

import axios from './../../api/api-client';

export function* gamesSaga() {
	yield put(fetchGamesRequest());
	try {
		const response = yield call(() => axios.get('/games'));
		yield put(gamesRequestSuccess(response));
	} catch (error) {
		yield put(gamesRequestFaild(error));
	}
}

export default gamesSaga;
