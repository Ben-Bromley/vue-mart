<script>
  export default {
    props: {
      product: Object,
      cart: Array
      },
    data() {
      return {};
    },
    methods: {
      // TODO: add vuex store
      addToCart(product) {
        console.log('catalogue-page')
      }
    },
  };
</script>

<template>
  <div
    class="card bg-secondary text-light w-100"
    style="border-radius: 10px !important; max-width: 90vw"
  >
    <div
      class="bg-white d-flex justify-content-center align-items-center px-2"
      style="border-radius: 10px !important; max-height: 10rem; height: 90%;"
    >
      <img
        :src="product.image"
        alt="product.title"
        class="card-img-top"
        style="object-fit: scale-down; height: 80%"
      />
    </div>
    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h3 class="card-title h5">{{ product.title }}</h3>
        <p class="card-text h6">£{{ parseFloat(product.price).toFixed(2) }}</p>
      </div>
      <div class="mt-1">
        <button class="btn btn-primary mt-2 w-100">
          <router-link :to="{name: 'ProductView', params: {id: product.id}}" class="text-light text-decoration-none">View Item</router-link>
        </button>
        <button @click="addToCart(prod)" class="btn btn-success mt-2 w-100">
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
    min-width: 14rem;
}
button {
  font-size: 1rem;
}
</style>
