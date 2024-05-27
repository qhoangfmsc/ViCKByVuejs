<template>
  <div class="screen" v-if="banners">
    <!-- BIGGER THAN OR MEDIUM SCREEN -->
    <v-carousel
      height="100%"
      show-arrows="hover"
      cycle
      hide-delimiter-background
      hide-delimiters
      class="d-none d-md-block"
    >
      <v-carousel-item v-for="banner in banners" :key="banner.id">
        <v-sheet height="100%">
          <v-img aspect-ratio="16/9" cover :src="banner.desktop" />
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- SMALLER THAN MEDIUM SCREEN -->
    <v-carousel
      height="100%"
      show-arrows="hover"
      cycle
      hide-delimiter-background
      hide-delimiters
      class="d-md-none"
    >
      <v-carousel-item v-for="banner in banners" :key="banner.id">
        <v-sheet height="100%">
          <v-img aspect-ratio="16/9" cover :src="banner.mobile" />
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mockupData } from "@/data/mockup";
export default {
  data() {
    return {
      banners: null,
    };
  },
  created() {
    let responeBannerApi = mockupData.getBannerApi();
    this.banners = responeBannerApi;
  },
};
</script>

<style></style>
