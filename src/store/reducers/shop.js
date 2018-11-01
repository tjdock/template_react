import * as actionTypes from '../actions/actionTypes';

const initialState = {
  shops: null,
  shop: null,
  imgsite: '',
  storeid: null,
  error: null,
  loading: false,
  loading2: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      //
    case actionTypes.GET_SHOPS_START:
      return {
        ...state,
        error: null,
        loading: true
      };
    case actionTypes.GET_SHOPS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        shops: action.stores,
        imgsite: action.imgsite,
        //storeid:action.storeid
      };
    case actionTypes.GET_SHOPS_FAIL:
      return {
        error: action.error,
        loading: false
      };
      // 会执行两边componentDidMount
      case actionTypes.GET_SHOP:
        return {
          ...state,
          storeid: action.storeid
        };
    // case actionTypes.SET_STOREID:
    //   return {
    //     ...state,
    //     storeid: action.storeid
    //   };
    case actionTypes.GET_SHOP_START:
      return {
        ...state,
        error: null,
        loading2: true,
      };
    case actionTypes.GET_SHOP_SUCCESS:
      return {
        ...state,
        error: null,
        loading2: false,
        shop: action.store,
        imgsite: action.imgsite
      };
    case actionTypes.GET_SHOP_FAIL:
      return {
        error: action.error,
        loading2: false
      };
    default:
      return state;
  }
};

export default reducer;