<script>
import ProductGridItem from "../components/product-grid-item.vue";
export default {
  components: { ProductGridItem },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    let prods = await fetch("https://fakestoreapi.com/products?limit=14");
    this.products = await prods.json();
    document.title = "VueMart | Products"
  },
};
</script>
<template class="page">
  <!-- Loading animation -->
  <div v-if="!products.length" class="loading mt-4">
    <div class="loadingAnimation"></div>
  </div>
  <div id="catalogue-view">
    <product-grid-item v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
<style scoped>
#catalogue-view {
  min-height: 90vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-auto-rows: auto;
  justify-items: center;
  gap: calc(5px + 1vw);
  min-width: 360px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 3vw;
}
</style>
