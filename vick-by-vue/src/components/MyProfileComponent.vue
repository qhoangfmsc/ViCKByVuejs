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
              :to="{ path: item.page }"
            >
              {{ item.title }}
            </RouterLink>
          </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-title @click="logout">
            <RouterLink class="text-red text-decoration-none" to="/">
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
        { title: "Thông tin của tôi", page: "/thong-tin-cua-toi" },
        { title: "Gói dịch vụ của tôi", page: "/goi-dich-vu-cua-toi" },
        { title: "Lịch sử giao dịch tiền", page: "/lich-su-giao-dich-tien" },
        { title: "Chuyển đổi cố vấn", page: "/chuyen-doi-co-van" },
        { title: "Phương thức thanh toán", page: "/phuong-thuc-thanh-toan" },
        { title: "Đổi mật khẩu", page: "/doi-mat-khau" },
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
