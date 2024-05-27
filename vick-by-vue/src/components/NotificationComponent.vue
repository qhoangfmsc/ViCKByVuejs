<template>
  <v-btn color="grey" rounded="xl">
    <div class="align-content-center">
      <div class="line-md--bell"></div>
    </div>
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
      </v-list>
    </v-menu>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Thông tin của tôi", page: "home-route" },
        { title: "Gói dịch vụ của tôi", page: "home-route" },
        { title: "Lịch sử giao dịch tiền", page: "home-route" },
        { title: "Chuyển đổi cố vấn", page: "home-route" },
        { title: "Phương thức thanh toán", page: "home-route" },
        { title: "Đổi mật khẩu", page: "home-route" },
      ],
    };
  },
};
</script>

<style scoped>
.line-md--bell {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-width='2'%3E%3Cpath stroke-dasharray='4' stroke-dashoffset='4' d='M12 3V5'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.2s' values='4;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='28' stroke-dashoffset='28' d='M12 5C8.68629 5 6 7.68629 6 11L6 17C5 17 4 18 4 19H12M12 5C15.3137 5 18 7.68629 18 11L18 17C19 17 20 18 20 19H12'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.2s' dur='0.4s' values='28;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='8' stroke-dashoffset='8' d='M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.6s' dur='0.2s' values='8;0'/%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  background-color: grey;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
</style>
