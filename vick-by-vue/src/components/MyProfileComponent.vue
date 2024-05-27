<template>
  <v-btn color="grey" rounded="xl">
    <span class="text-capitalize mr-3">{{
      `${authen.info.firstname} ${authen.info.lastname}`
    }}</span>
    <v-avatar size="small">
      <v-img v-bind:src="authen.info.avatar"></v-img>
    </v-avatar>
    <v-menu open-on-hover activator="parent">
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title>
            <RouterLink
              class="text-black text-decoration-none"
              :to="{ name: item.page }"
            >
              {{ item.title }}
            </RouterLink>
          </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-title @click="logout">
            <RouterLink
              class="text-red text-decoration-none"
              :to="{ name: 'home-route' }"
            >
              Đăng xuất
            </RouterLink>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>

<script>
export default {
  props: {
    authen: Object,
    default: function () {
      return {};
    },
  },
  data() {
    return {
      items: [
        { title: "Thông tin của tôi", page: "home-route" },
        { title: "Trang dịch vụ", page: "main-service-route" },
        { title: "Gói dịch vụ của tôi", page: "home-route" },
        { title: "Lịch sử giao dịch tiền", page: "home-route" },
        { title: "Chuyển đổi cố vấn", page: "home-route" },
        { title: "Phương thức thanh toán", page: "home-route" },
        { title: "Đổi mật khẩu", page: "home-route" },
      ],
    };
  },
  methods: {
    logout() {
      this.$emit("logOut");
    },
  },
};
</script>

<style scoped></style>
