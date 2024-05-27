<template>
  <div class="main-service-page">
    <v-layout>
      <main-service-aside-component />
      <v-main>
        <!-- LARGER THAN MD SCREEN -->
        <div class="d-none d-md-flex justify-end px-4 pt-4 pb-0">
          <div class="mx-3">
            <v-date-input
              width="20rem"
              label="Chọn ngày"
              prepend-icon=""
              prepend-inner-icon="$calendar"
              variant="solo"
            />
          </div>
          <div class="mx-3">
            <v-select
              width="20rem"
              prepend-inner-icon="mdi-account"
              label="Chọn gói cố vấn"
              :items="[
                'Gói Captain - Nguyễn Hữu Thông',
                'Gói GURU - Nguyễn Trần Hưng',
                'Gói GURU - Nguyễn Hồng Điệp',
              ]"
              variant="solo-filled"
            />
          </div>
        </div>
        <!-- SMALLER THAN MD SCREEN -->
        <div class="d-md-none d-block px-4 pt-4 pb-0">
          <div class="mx-3">
            <v-date-input
              label="Chọn ngày"
              prepend-icon=""
              prepend-inner-icon="$calendar"
              variant="solo"
            />
          </div>
          <div class="mx-3">
            <v-select
              prepend-inner-icon="mdi-account"
              label="Chọn gói cố vấn"
              :items="[
                'Gói Captain - Nguyễn Hữu Thông',
                'Gói GURU - Nguyễn Trần Hưng',
                'Gói GURU - Nguyễn Hồng Điệp',
              ]"
              variant="solo-filled"
            />
          </div>
        </div>
        <div class="container">
          <v-row no-gutters>
            <v-col v-for="n in 4" :key="n" cols="6">
              <v-sheet class="ma-2 pa-2">
                <v-card elevation="3" height="15rem">
                  <h3 class="bg-vprimary text-white pa-2">Title {{ n }}</h3>
                  <v-row class="h-100">
                    <v-col class="d-none d-md-block" cols="4">
                      <v-img
                        height="100%"
                        aspect-ratio="1/1"
                        cover
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                      />
                    </v-col>
                    <v-col>
                      <div class="pa-2">Chưa có dữ liệu!</div>
                    </v-col>
                  </v-row>
                </v-card>
              </v-sheet>
            </v-col>
          </v-row>
        </div>
      </v-main>
    </v-layout>
  </div>
</template>

<script>
import { VDateInput } from "vuetify/labs/VDateInput";
import MainServiceAsideComponent from "@/components/MainServiceAsideComponent.vue";

export default {
  components: {
    VDateInput,
    MainServiceAsideComponent,
  },
  data() {
    return {};
  },
};
</script>
