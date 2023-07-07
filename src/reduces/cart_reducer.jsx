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
      console.log(product);
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
          name: product,
          color,
          amount,
          price: product.price,
          stocks: product.stock,
          image: product.images[0].url,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }
    default:
      console.log(`No Matching "${action.type}" - action type`);
      return state;
  }
};

export default cart_reducer;
