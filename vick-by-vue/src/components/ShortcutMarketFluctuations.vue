<template>
  <div class="screen">
    <v-card
      class="pa-0 ma-6 rounded-t-lg shortcut-card"
      height="25rem"
      elevation="3"
    >
      <RouterLink :to="{ name: 'home-route' }">
        <v-img
          aspect-ratio="1/1"
          cover
          src="https://vick.vn/static/image/dien_bien_thi_truong.png"
        ></v-img>
      </RouterLink>
    </v-card>
  </div>
</template>

<script></script>

<style>
.shortcut-card {
  transition: all 0.5s;
}
.shortcut-card:hover {
  opacity: 0.6;
}
</style>
