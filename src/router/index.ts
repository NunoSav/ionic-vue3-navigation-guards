import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Page1 from "../views/Page1.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "page1",
    component: Page1,
    meta: {
      isPublic: true,
    },
  },
  {
    path: "/page2",
    name: "page2",
    component: () => import("../views/Page2.vue"),
    meta: {
      stateCode: "0x00",
    },
  },
  {
    path: "/page2/page3",
    name: "page3",
    component: () => import("../views/Page3.vue"),
    meta: {
      stateCode: "0x02",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  console.log(`To: ${to.name?.toString()}, from ${from.name?.toString()}`);
  next();
});

export default router;
