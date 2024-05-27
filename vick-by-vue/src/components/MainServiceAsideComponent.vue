<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-finance"
        title="Cố vấn đầu tư của tôi"
        value="main-service-route"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-cash"
        title="Phương pháp đầu tư"
        value="main-service-route"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-eye-circle"
        title="Livestream"
        value="main-service-route"
      ></v-list-item>
      <v-list-item
        prepend-avatar="https://image.vick.vn/21232f297a57a5a743894a0e4a801fc3/CEO-nguyen-hong-diep-1_21481156567208849.png"
        title="Góc nhìn chuyên gia"
        value="main-service-route"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
