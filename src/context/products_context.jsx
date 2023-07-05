import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reduces/products_reducer';
import { products_url } from '../utilities/data';
import {
  SIDEBAR_SHOW,
  SIDEBAR_HIDE,
  GET_PRODUCTS_LOAD,
  GET_PRODUCTS_LOAD_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../reduces/actionTypes';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isSidebarDisplay: false,
    isLoadingProducts: false,
    errorProducts: false,
    products: [],
    productsFeatured: [],
  });

  const showSidebar = () => {
    dispatch({ type: SIDEBAR_SHOW });
  };

  const hideSidebar = () => {
    dispatch({ type: SIDEBAR_HIDE });
  };

  const fetchProductData = async (url) => {
    try {
      const resData = await fetch(url);
      const parseData = await resData.json();
      dispatch({ type: GET_PRODUCTS_LOAD_SUCCESS, payload: parseData });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
      throw new Error(error);
    }
  };

  useEffect(() => {
    dispatch({ type: GET_PRODUCTS_LOAD });
    fetchProductData(products_url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, showSidebar, hideSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
