import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reduces/products_reducer';
// import { products_url as url } from '../utilities/data';
// import {
//   SIDEBAR_OPEN,
//   SIDEBAR_CLOSE,
//   GET_PRODUCTS_BEGIN,
//   GET_PRODUCTS_SUCCESS,
//   GET_PRODUCTS_ERROR,
//   GET_SINGLE_PRODUCT_BEGIN,
//   GET_SINGLE_PRODUCT_SUCCESS,
//   GET_SINGLE_PRODUCT_ERROR,
// } from '../actions'

const initialState = {};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value="products context">
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
