import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LandingPage from "@/views/LandingPage.vue";
import MainServicePage from "@/views/MainServicePage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "home-route",
    component: HomePage,
  },
  {
    path: "/thong-tin",
    name: "landing-route",
    component: LandingPage,
  },
  {
    path: "/dich-vu",
    name: "main-service-route",
    component: MainServicePage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
