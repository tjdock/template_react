import * as actions from '../actions/index';
import axios from 'axios';
import {put} from 'redux-saga/effects';

export function* getShopsSaga() {
  yield put(actions.getShopsStart());
  try {
    const response = yield axios.get('store/storeList.action');
    //console.log(response.data);
    if (response.data.success === 1) {
      yield put(actions.getShopsSuccess(response.data.stores, response.data.imgsite));
    } else {
      yield put(actions.getShopsFail('接口参数错误!'));
    }
  }
  catch (error) {
    yield put(actions.getShopsFail(error));
  }
}

export function* getShopSaga(payload) {
  yield put(actions.getShopStart());
  //yield put(actions.setStoreId(payload.storeid));
  try {
    const response = yield axios.get('store/storeinfo.action', {params: {'storeid': payload.storeid}});
    //console.log(response.data);
    if (response.data.success === 1) {
      yield put(actions.getShopSuccess(response.data.store, response.data.imgsite));
    } else {
      yield put(actions.getShopFail('接口参数错误'));
    }
  }
  catch (error) {
    yield put(actions.getShopFail('接口参数错误!'));
  }
}