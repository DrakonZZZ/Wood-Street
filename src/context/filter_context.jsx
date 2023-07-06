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
    filterTerm: {
      value: '',
      company: 'all',
      category: 'all',
      minPrice: 0,
      maxPrice: 0,
      price: 0,
      shipping: false,
    },
    gridView: true,
    sort: 'product-ascending',
  });

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filterTerm]);

  const setGrid = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setList = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    dispatch({ type: UPDATE_SORT, payload: e.target.value });
  };
  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      value = e.target.textContent;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const resetFilter = () => {};
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGrid,
        setList,
        updateSort,
        updateFilter,
        resetFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
