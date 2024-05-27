<template>
  <div class="index">
    <carousel-component />
    <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <adviser-choosing-component />
        </v-sheet>
      </v-col>
      <v-col cols="4" class="d-none d-md-block">
        <v-sheet class="pa-2 ma-2">
          <index-chart-component />
          <shortcut-market-fluctuations />
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CarouselComponent from "@/components/CarouselComponent.vue";
import AdviserChoosingComponent from "@/components/AdviserChoosingComponent.vue";
import IndexChartComponent from "@/components/IndexChartComponent.vue";
import ShortcutMarketFluctuations from "@/components/ShortcutMarketFluctuations.vue";

export default {
  components: {
    CarouselComponent,
    AdviserChoosingComponent,
    IndexChartComponent,
    ShortcutMarketFluctuations,
  },
  data() {
    return {};
  },
};
</script>
