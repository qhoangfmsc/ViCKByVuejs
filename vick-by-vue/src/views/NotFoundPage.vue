<template>
  <div class="not-found-page">
    <div class="line-md--alert-circle-loop"></div>
    <h1 class="text-red mb-3">Lỗi 404</h1>
    <h3 class="text-red-lighten-2">
      Bạn đang truy cập vào trang không có trên hệ thống ViCK! <br />
      Xin vui lòng về trang chủ để tiếp tục.
    </h3>
    <RouterLink :to="{ name: 'home-route' }">
      <v-btn
        class="my-6 text-white"
        color="var(--vick-secondary)"
        height="40"
        text="Quay về trang chủ"
        variant="flat"
        rounded="xl"
      />
    </RouterLink>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.not-found-page {
  height: 100%;
  text-align: center;
  align-content: center;
}
.line-md--alert-circle-loop {
  display: inline-block;
  width: 8rem;
  height: 8rem;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-width='2'%3E%3Cpath stroke-dasharray='60' stroke-dashoffset='60' d='M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.375s' values='60;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='8' stroke-dashoffset='8' d='M12 7V13'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.45s' dur='0.15s' values='8;0'/%3E%3Canimate attributeName='stroke-width' begin='0.75s' dur='2.25s' keyTimes='0;0.1;0.2;0.3;1' repeatCount='indefinite' values='2;3;3;2;2'/%3E%3C/path%3E%3C/g%3E%3Ccircle cx='12' cy='17' r='1' fill='%23000' fill-opacity='0'%3E%3Canimate fill='freeze' attributeName='fill-opacity' begin='0.6s' dur='0.3s' values='0;1'/%3E%3Canimate attributeName='r' begin='0.975s' dur='2.25s' keyTimes='0;0.1;0.2;0.3;1' repeatCount='indefinite' values='1;2;2;1;1'/%3E%3C/circle%3E%3C/svg%3E");
  background-color: var(--vick-danger);
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
</style>
