import { createApp } from "vue";
import { createStore } from "vuex";
import store from './store/index';
import App from "./App.vue";
import "./index.css";
import router from "./routes.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Create a new store instance.
const oldStore = createStore({
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

const VueMart = createApp(App)
// Install the store instance as a plugin
VueMart.use(store);
VueMart.use(router);
VueMart.mount("#app");

