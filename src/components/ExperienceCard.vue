<template>
  <div class="relative">
    <div class="absolute bg-slate-50 inset-x-0 text-center bottom-0 py-2">
      {{ experience.name }}
    </div>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
  </div>
</template>

<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
