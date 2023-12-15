import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import sourceData from "@/data.json";
//  u can also use createWebHistory
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/destination/:id/:slug",
      name: "show",
      component: () => import("../views/Destination.vue"),

      // u can also use props to define ur params in the url
      // ...route.params means that all params  will be added to the url

      props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),

      // ************************Route Guards************************

      beforeEnter(to, from) {
        const exist = sourceData.destinations.find(
          (destination) => destination.id === parseInt(to.params.id)
        );
        if (!exist) {
          return {
            name: "notFound",
            // Allows keeping the url the same if u write wrong
            params: { pathMatch: to.path.split("/").slice(1) },
            query: to.query,
            hash: to.hash,
          };
        }
      },
      children: [
        {
          path: ":experienceSlug",
          name: "experience",
          component: () => import("../views/Experience.vue"),
          props: (route) => ({
            ...route.params,
            id: parseInt(route.params.id),
          }),
        },
      ],
    },

    // a child  of destination but doesnt show in the same page

    // {
    //   path: "/destination/:id/:slug/:experienceSlug",
    //   name: "experience",
    //   component: () => import("../views/Experience.vue"),
    //   props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    // },

    // ************************Page Not Found************************

    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("../components/NotFound.vue"),
    },
  ],

  // ************************Scroll Behavior************************

  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
