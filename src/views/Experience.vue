<template>
  <div
    class="flex flex-col sm:flex-row gap-10 bg-gray-50 p-3 mb-8 mt-4"
    v-if="experience"
  >
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <div>
      <h3 class="text-lg uppercase font-medium tracking-widest">
        {{ experience.name }}
      </h3>
      <p>{{ experience.description }}</p>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    experienceSlug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
    experience() {
      return this.destination.experiences.find(
        (experience) => experience.slug === this.experienceSlug
      );
    },
  },
};
</script>
