<template>
  <div
    class="con w-full grid place-content-center bg-gray-100 text-center space-y-3 drop-shadow-lg shadow-gray-950"
  >
    <h1 class="text-3xl font-black">Page Not Found</h1>
    <p class="text-sm text-gray-400 font-semibold">
      Oops, we couldn't find that page
    </p>
    <router-link to="/" class="border border-black px-3 py-2 uppercase"
      >Back to Home Page</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.con {
  height: calc(100vh - 150px);
}
</style>
