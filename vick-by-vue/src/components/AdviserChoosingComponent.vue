<template>
  <div class="screen" v-if="advisors">
    <v-card
      elevation="3"
      class="adviser pa-1 ma-6"
      v-for="advisor in advisors"
      :key="advisor.id"
    >
      <v-row no-gutters>
        <v-col cols="4" class="d-none d-md-block">
          <v-sheet class="pa-2 ma-2">
            <div class="d-flex justify-center">
              <div class="container">
                <v-img
                  width="11rem"
                  height="11rem"
                  cover
                  class="rounded-circle"
                  aspect-ratio="1/1"
                  :src="advisor.avatarlink"
                />
              </div>
            </div>
            <div class="text-center mt-2">
              <v-rating
                class="d-none d-md-block"
                color="var(--vick-primary)"
                v-model="advisor.rating"
                half-increments
                disabled
              ></v-rating>
            </div>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2 ma-2">
            <v-row class="mb-2">
              <v-col
                cols="4"
                class="d-md-none"
                style="text-align: -webkit-center; align-content: center"
              >
                <v-img
                  width="4rem"
                  height="4rem"
                  cover
                  class="rounded-circle"
                  aspect-ratio="1/1"
                  :src="advisor.avatarlink"
                />
              </v-col>
              <v-col>
                <h2 style="color: var(--vick-primary)">
                  {{ advisor.providerfullname }}
                </h2>
              </v-col>
            </v-row>
            <v-divider
              class="border-opacity-100 mb-2"
              color="var(--vick-primary)"
            />
            <h3 style="color: var(--vick-secondary)">
              {{ advisor.investmentstyle }}
            </h3>
            <p>{{ advisor.investmentphilosophy }}</p>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mockupData } from "@/data/mockup";
export default {
  data() {
    return {
      advisors: null,
    };
  },
  created() {
    let responseInvestmentAdvisoryServiceApi =
      mockupData.getInvestmentAdvisoryServiceApi();
    this.advisors = responseInvestmentAdvisoryServiceApi;
  },
  mounted() {},
};
</script>

<style scoped>
.adviser {
  transition: all 0.6s;
}
.adviser:hover {
  transform: scale(1.05);
}
</style>
