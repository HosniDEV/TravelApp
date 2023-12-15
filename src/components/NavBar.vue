<template>
  <div
    class="nav bg-gray-200 px-4 m-auto capitalize text-base text-blue-500 transition duration-150 ease-linear font-bold mb-10"
  >
    <div class="max-w-6xl m-auto h-full space-x-4 py-3 border-">
      <router-link active-class="border-b-2 py-3 border-blue-500" to="/">
        Home
      </router-link>
      <router-link
        active-class="border-b-2 py-3 border-blue-500 transition  ease-in-out duration-500 "
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'show',
          params: { id: destination.id, slug: destination.slug },
        }"
        >{{ destination.name }}</router-link
      >
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>

<style lang="scss" scoped></style>
