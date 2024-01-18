// FILE: main.js

import { createApp } from "vue";
import { Quasar } from "quasar";
import { createRouter, createWebHistory } from "vue-router";
import VueSmoothScroll from "vue3-smooth-scroll";
import IntoShop from "./components/IntoShop.vue";
import Home from "./views/home.vue";
import Admin from "./views/addminpage.vue";
import NewYearCard from "./components/NewYearCard.vue";
import QuestionPage from "./components/QuestionPage.vue";
import ConfirmPage from "./components/ConfirmPage.vue";
import index from "./components/Index.vue";
import FlowerList from "./components/FlowerList.vue";
import WriteMessage from "./components/WriteMessage.vue";
import birthdayProject from "./views/birthdayProject.vue";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./App.vue";

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/admin-page-schedule", component: Admin },
    { path: "/new-year-card", component: NewYearCard },
    { path: "/QuestionPage", component: QuestionPage },
    { path: "/ConfirmPage", component: ConfirmPage },
    { path: "/index", component: index },
    { path: "/FlowerList", component: FlowerList },
    { path: "/WriteMessage", component: WriteMessage },
    { path: "/goodpluming21ossom", component: birthdayProject },
  ],
});

myApp.use(router);
myApp.use(VueSmoothScroll);

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
