<template>
  <div class="index">
    <carousel-component />
    <h1>This is an index page</h1>
  </div>
</template>

<script>
import CarouselComponent from "@/components/CarouselComponent.vue";
export default {
  components: {
    CarouselComponent,
  },
  data() {
    return {};
  },
};
</script>
