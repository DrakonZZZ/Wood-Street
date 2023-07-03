import {
  SIDEBAR_SHOW,
  SIDEBAR_HIDE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from './actionTypes';

const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_SHOW: {
      return { ...state, isSidebarDisplay: true };
    }
    case SIDEBAR_HIDE: {
      return { ...state, isSidebarDisplay: false };
    }
    default:
      return state;
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
