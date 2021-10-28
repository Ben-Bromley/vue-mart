<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      product: {},
      loaded: false,
    };
  },
  async mounted() {
    let response = await fetch(`https://fakestoreapi.com/products/${this.id}`);
    this.product = await response.json();
    document.title = "VueMart | " + this.product.title
  },
  methods: {
    addToCart(product) {
        console.log('product-page')
      }
  }
};
</script>

<template>
  <div class="container">
    <div v-if="!Object.keys(product).length" class="loading mt-4">
      <div class="loadingAnimation"></div>
    </div>
    <div v-if="Object.keys(product).length" class="row mt-lg-5">
      <div class="col-md-6 p-4">
        <div class="bg-white p-3 rounded h-100 content-center">
          <img
            :src="product.image"
            alt=""
            class="mx-auto d-block"
            style="object-fit: scale-down; width: 80%"
          />
        </div>
      </div>
      <div class="mx-auto col-md-6 p-4">
        <h3 class="display-4">{{ product.title }}</h3>
        <h4 class="display-6" style="font-weight: 600 !important;">£{{ parseFloat(product.price).toFixed(2) }}</h4>
        <button @click="addToCart(product)" class="btn btn-success my-4 w-100" style="font-weight: 800; font-size: 1.5rem;">
          Add To Cart
        </button>
        <h2 style="font-weight: 900">Description:</h2>
        <p class="mt-3 h4">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>