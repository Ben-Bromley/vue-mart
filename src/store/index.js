import { createStore } from 'vuex';

export default createStore({
    state() {
      return {
        cart: {
          totalPrice: 0,
          itemCount: 0,
          items: [],
        },
      };
    },
    mutations: {
      // TODO: test this method too  
      addToCart(state, product) {
        setTimeout(() => {
          state.cart.items.push({ ...product, cartId: new Date().valueOf() });
        }, 20);
      },
      // TODO: test this method
      removeFromCart(state, product) {
        state.cart.items = state.cart.items.filter((item) => {
          return item.cartId != product.cartId;
        });
      },
    },
  });
