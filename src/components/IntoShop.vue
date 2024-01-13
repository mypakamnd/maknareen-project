<script setup>
</script>

<template>
  <div id="q-app" class="contentApp" style="min-height: 100vh">
    <img
      src="/assets/logoGoodPluming21ossom.png"
      alt=""
      width="200px"
      height="200px"
    />
    <div>GoodPluming21ossom Shop</div>
    <div>
      <router-link to="/QuestionPage">
        <q-btn
          style="margin-top: 20px"
          color="white"
          text-color="black"
          label="เข้าสู่ร้านค้า"
        ></q-btn>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.contentApp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
