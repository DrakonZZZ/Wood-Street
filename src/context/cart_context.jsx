import { createContext, useEffect, useContext, useReducer } from 'react';
import reducer from '../reduces/cart_reducer';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../reduces/actionTypes';

const CartContext = createContext();

const getLocalStorage = () => {
  if (localStorage.getItem('cart')) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    cart: getLocalStorage(),
    totalItems: 0,
    totalAmount: 0,
    shippingCharges: 1024,
  });

  const addItemCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  const removeItemCart = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  const changeAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const totalCart = () => {};

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItemCart,
        removeItemCart,
        changeAmount,
        clearCart,
        totalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
