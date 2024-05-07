<template>
  <v-app>
    <header-component />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import "./assets/styles/global.css";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },
  data: () => ({
    //
  }),
};
</script>
