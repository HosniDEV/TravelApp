<template>
  <nav-bar />
  <div class="max-w-5xl m-auto">
    <router-view />
    <!-- <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped></style>
