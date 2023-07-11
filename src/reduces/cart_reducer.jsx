import CartItem from '../components/CartItem';
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../reduces/actionTypes';

const cart_reducer = (state, action) => {
  switch (action.type) {
    // add item to the cart
    case ADD_TO_CART: {
      const { id, color, amount, product } = action.payload;
      const newItemArray = state.cart.find(
        (itemId) => itemId.id === id + color
      );
      if (newItemArray) {
        const itemArray = state.cart.map((item) => {
          if (item.id === id + color) {
            let newAmount = item.amount + amount;
            if (newAmount > item.stocks) {
              newAmount = item.stocks;
            }
            return { ...item, amount: newAmount };
          } else {
            return item;
          }
        });
        return { ...state, cart: itemArray };
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          price: product.price,
          stocks: product.stock,
          image: product.images[0].url,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }
    case REMOVE_CART_ITEM: {
      const rmItem = state.cart.filter((item) => item.id !== action.payload);

      return { ...state, cart: rmItem };
    }
    case TOGGLE_CART_ITEM_AMOUNT: {
      const { value, id } = action.payload;
      let newCart = state.cart.map((item) => {
        if (item.id === id) {
          if (value === 'increase') {
            let newAmount = item.amount + 1;
            if (newAmount > item.stocks) {
              newAmount = item.stocks;
            }
            return { ...item, amount: newAmount };
          }
          if (value === 'decrease') {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        } else {
          return item;
        }
      });
      return { ...state, cart: newCart };
    }
    case COUNT_CART_TOTALS: {
      const { totalItems, totalAmount } = state.cart.reduce(
        (accu, curr) => {
          const { amount, price } = curr;
          accu.totalItems += amount;
          accu.totalAmount += price * amount;

          return accu;
        },
        {
          totalItems: 0,
          totalAmount: 0,
        }
      );

      return { ...state, totalItems, totalAmount };
    }
    case CLEAR_CART: {
      return { ...state, cart: [] };
    }
    default:
      console.log(`No Matching "${action.type}" - action type`);
      return state;
  }
};

export default cart_reducer;
