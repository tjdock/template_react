import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {getShopsSaga,getShopSaga} from './shop';

export function* watchShop() {
  yield takeEvery(actionTypes.GET_SHOPS, getShopsSaga);
  yield takeEvery(actionTypes.GET_SHOP, getShopSaga);
}