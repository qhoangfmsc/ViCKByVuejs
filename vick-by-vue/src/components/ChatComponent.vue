<template>
  <div class="chat-button">
    <v-menu :location="location">
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          dark
          v-bind="props"
          height="100%"
          style="padding: 0"
          class="rounded-circle"
        >
          <div class="line-md--chat"></div>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <h1>Chat Component</h1>
        </v-list-item>
      </v-list>
    </v-menu>
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
.chat-button {
  width: 4rem;
  height: 4rem;

  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 9999;
}
.line-md--chat {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath stroke-dasharray='68' stroke-dashoffset='68' d='M3 19.5V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V16C21 16.5523 20.5523 17 20 17H5.5z'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.45s' values='68;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='10' stroke-dashoffset='10' d='M8 7h8' opacity='0'%3E%3Cset attributeName='opacity' begin='0.525s' to='1'/%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.525s' dur='0.15s' values='10;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='10' stroke-dashoffset='10' d='M8 10h8' opacity='0'%3E%3Cset attributeName='opacity' begin='0.6s' to='1'/%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.6s' dur='0.15s' values='10;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='6' stroke-dashoffset='6' d='M8 13h4' opacity='0'%3E%3Cset attributeName='opacity' begin='0.675s' to='1'/%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.675s' dur='0.15s' values='6;0'/%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
</style>
