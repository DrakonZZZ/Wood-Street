import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../reduces/actionTypes';

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      let maxPrice = action.payload.map((item) => item.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
        filterTerm: {
          ...state.filterTerm,
          price: maxPrice,
          maxPrice: maxPrice,
        },
      };
    }
    case SET_GRIDVIEW: {
      return { ...state, gridView: true };
    }
    case SET_LISTVIEW: {
      return { ...state, gridView: false };
    }
    case UPDATE_SORT: {
      return { ...state, sort: action.payload };
    }
    case SORT_PRODUCTS: {
      const { sort, filteredProducts } = state;
      let mutProducts = [...filteredProducts];
      if (sort === 'price-lowest') {
        mutProducts = mutProducts.sort((curr, next) => curr.price - next.price);
        console.log(mutProducts);
      }
      if (sort === 'price-highest') {
        mutProducts = mutProducts.sort((curr, next) => next.price - curr.price);
      }
      if (sort === 'product-ascending') {
        mutProducts = mutProducts.sort((curr, next) => {
          return curr.name.localeCompare(next.name);
        });
      }
      if (sort === 'product-descending') {
        mutProducts = mutProducts.sort((curr, next) => {
          return next.name.localeCompare(curr.name);
        });
      }
      return { ...state, filteredProducts: mutProducts };
    }
    case UPDATE_FILTERS: {
      const { name, value } = action.payload;
      return {
        ...state,
        filterTerm: {
          ...state.filterTerm,
          [name]: value,
        },
      };
    }
    case FILTER_PRODUCTS: {
      const { allProducts } = state;
      const { value, category, company, price, shipping } = state.filterTerm;
      let newFilterProducts = [...allProducts];

      if (value) {
        newFilterProducts = newFilterProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(value);
        });
      }

      if (category !== 'all') {
        newFilterProducts = newFilterProducts.filter((product) => {
          return product.category === category;
        });
      }
      if (company !== 'all') {
        newFilterProducts = newFilterProducts.filter((product) => {
          return product.company === company;
        });
      }
      if (price) {
        newFilterProducts = newFilterProducts.filter(
          (product) => product.price <= price
        );
      }
      if (shipping) {
        newFilterProducts = newFilterProducts.filter(
          (product) => product.shipping === true
        );
      }
      return { ...state, filteredProducts: newFilterProducts };
    }
    case CLEAR_FILTERS: {
      return {
        ...state,
        filterTerm: {
          ...state.filterTerm,
          value: '',
          company: 'all',
          category: 'all',
          price: state.filterTerm.maxPrice,
          ship: false,
        },
      };
    }
    default:
      console.log(`No Matching "${action.type}" - action type`);
      return state;
  }
};

export default filter_reducer;
