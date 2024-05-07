<template>
  <div>
    <!-- BIGGER THAN OR MEDIUM SCREEN -->
    <v-carousel
      height="500"
      show-arrows="hover"
      cycle
      hide-delimiter-background
      hide-delimiters
      class="d-none d-md-block"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              {{ slide }}
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- SMALLER THAN MEDIUM SCREEN -->
    <v-carousel
      height="250"
      show-arrows="hover"
      cycle
      hide-delimiter-background
      hide-delimiters
      class="d-md-none"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              {{ slide }}
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>

<style></style>
