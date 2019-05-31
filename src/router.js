/* eslint-disable no-unused-vars */
import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Recommend from "views/recommend/recommend";
// import Singer from "views/singer/singer";
// import rank from "views/rank/rank";
// import Search from "views/search/search";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/recommend",
      name: "recommend",
      component: () => import("views/recommend/recommend.vue")
    },
    {
      path: "/singer",
      name: "singer",
      component: () => import("views/singer/singer.vue")
    },
    {
      path: "/rank",
      name: "rank",
      component: () => import("views/rank/rank.vue")
    },
    {
      path: "/search",
      name: "search",
      component: () => import("views/search/search.vue")
    }
  ]
});
