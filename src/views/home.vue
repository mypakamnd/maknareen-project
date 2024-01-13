<script setup>
import CoverPage from "../components/CoverPage.vue";
import ScheduleEvent from "../components/ScheduleEvent.vue";
import Info from "../components/Info.vue";
import RecommendedFood from "../components/RecommendedFood.vue";
import Footer from "../components/Footer.vue";
import MeenSNS from "../components/MeenSNS.vue";
</script>

<template>
  <body>
    <CoverPage />

    <ScheduleEvent />
    <RecommendedFood />
    <Info />
    <MeenSNS />
    <Footer />
    <router-view></router-view>
  </body>
</template>

<style scoped>
</style>
