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

<template>
  <div class="px-3 sm:px-0">
    <h1 class="border border-black py-2 px-4 sm:inline-flex mb-4">
      ALL DESTINATIONS
    </h1>
  </div>
  <main class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 my-4">
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      <h1
        class="text-base font-semibold tracking-wider mb-2 sm:text-end text-start underline text-blue-500"
      >
        {{ destination.name }}
      </h1>
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
    </router-link>
  </main>
</template>
