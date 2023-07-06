import { createContext, useEffect, useContext, useReducer } from 'react';
import { useProductsContext } from './products_context';
import reducer from '../reduces/filter_reducer';
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../reduces/actionTypes';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, {
    allProducts: [],
    filteredProducts: [],
    gridView: true,
  });

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  const setGrid = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setList = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGrid,
        setList,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
