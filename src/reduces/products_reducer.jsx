import {
  SIDEBAR_SHOW,
  SIDEBAR_HIDE,
  GET_PRODUCTS_LOAD,
  GET_PRODUCTS_LOAD_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_lOAD,
} from './actionTypes';

const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_SHOW: {
      return { ...state, isSidebarDisplay: true };
    }
    case SIDEBAR_HIDE: {
      return { ...state, isSidebarDisplay: false };
    }
    case GET_PRODUCTS_LOAD: {
      return { ...state, isLoadingProducts: true };
    }
    case GET_PRODUCTS_LOAD_SUCCESS: {
      const allProducts = action.payload;
      const featuredProducts = allProducts.filter(
        (item) => item.featured === true
      );
      return {
        ...state,
        isLoadingProducts: false,
        products: allProducts,
        productsFeatured: featuredProducts,
      };
    }
    case GET_PRODUCTS_ERROR: {
      return { ...state, isLoadingProducts: false, errorProductSingle: true };
    }
    case GET_SINGLE_PRODUCT_lOAD: {
      return { ...state, isLoadingSingle: true, errorProductSingle: false };
    }
    case GET_SINGLE_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoadingSingle: false,
        singleProduct: action.payload,
      };
    }
    case GET_SINGLE_PRODUCT_ERROR: {
      return { ...state, isLoadingSingle: false, errorProductSingle: true };
    }
    default: {
      console.log(`No Matching "${action.type}" - action type`);
      return state;
    }
  }
};

export default products_reducer;
