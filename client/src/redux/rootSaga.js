import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from './../constants/actionTypes';

import gamesSaga from './sagas/gamesSaga';

function* rootSaga() {
	yield takeEvery(actionTypes.INIT_GAMES, gamesSaga);
}

export default rootSaga;
