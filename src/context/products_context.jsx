import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reduces/products_reducer';
// import { products_url as url } from '../utilities/data';
import {
  SIDEBAR_SHOW,
  SIDEBAR_HIDE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../reduces/actionTypes';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isSidebarDisplay: false,
  });

  const showSidebar = () => {
    dispatch({ type: SIDEBAR_SHOW });
  };

  const hideSidebar = () => {
    dispatch({ type: SIDEBAR_HIDE });
  };
  return (
    <ProductsContext.Provider value={{ ...state, showSidebar, hideSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
