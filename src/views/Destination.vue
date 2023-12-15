<template>
  <GoBack />
  <div
    class="flex flex-col sm:flex-row gap-4 sm:gap-10 bg-gray-50 p-3"
    v-if="destination"
  >
    <img :src="`/images/${destination.image}`" :alt="destination.name" />
    <p class="text-justify sm:text-start">{{ destination.description }}</p>
  </div>

  <div class="my-6 mr-4 text-lg font-medium capitalize text-end">
    <strong>Top experiences in {{ destination.name }}</strong>
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 p-3 bg-slate-200"
  >
    <router-link
      v-for="experience in destination.experiences"
      :key="experience.id"
      :to="{ name: 'experience', params: { experienceSlug: experience.slug } }"
      ><ExperienceCard :experience="experience"></ExperienceCard>
    </router-link>
  </div>
  <router-view />
</template>

<script>
import sourceData from "@/data.json";
import GoBack from "@/components/GoBack.vue";
import ExperienceCard from "@/components/ExperienceCard.vue";
export default {
  components: { ExperienceCard, GoBack },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {};
  },
  computed: {
    // destinationId() {
    //   return parseInt(this.$route.params.id);
    // },
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
