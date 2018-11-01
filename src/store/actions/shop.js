import * as actionTyes from './actionTypes';

//获取所有门店
export const getShops = () => {
  return {
    type: actionTyes.GET_SHOPS
  }
};
export const getShopsStart = () => {
  return {
    type: actionTyes.GET_SHOPS_START
  }
};
export const getShopsSuccess = (stores, imgsite) => {
  return {
    type: actionTyes.GET_SHOPS_SUCCESS,
    stores,
    imgsite
  }
};
export const getShopsFail = (error) => {
  return {
    type: actionTyes.GET_SHOPS_FAIL,
    error: error
  }
};

//获取门店详情
export const getShop = (id) => {
  return {
    type: actionTyes.GET_SHOP,
    storeid: parseInt(id)
  }
};
export const getShopStart = () => {
  return {
    type: actionTyes.GET_SHOP_START
  }
};
export const getShopSuccess = (store, imgsite) => {
  return {
    type: actionTyes.GET_SHOP_SUCCESS,
    store,
    imgsite
  }
};
export const getShopFail = (error) => {
  return {
    type: actionTyes.GET_SHOP_FAIL,
    error: error
  }
};

//
export const setStoreId = (id) => {
  return {
    type: actionTyes.SET_STOREID,
    storeid: parseInt(id)
  }
};