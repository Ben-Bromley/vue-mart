<script>
export default {
  mounted(){
    document.title = "VueMart | Home"
  }
};
</script>

<template>
  <nav class="sticky-top bg-success bg-gradient d-flex justify-content-between align-items-center px-3 shadow-lg">
    <router-link to="/" class="text-light text-decoration-none">
      <h1 class="m-0">VueMart</h1>
    </router-link>
    <div class="">
      <router-link to="/checkout" class="text-white text-decoration-none">
        <span class="material-icons p-2 display-6">shopping_cart</span>
      </router-link>
    </div>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
nav {
  min-height: 70px;
  height: 10vh;
  min-width: 360px;
}
</style>
