<script setup>
</script>

<template>
  <div id="q-app" class="contentApp" style="min-height: 100vh">
    <div id="text1">
      <p>วันนี้เป็นวันพิเศษของคนพิเศษของคุณรึเปล่า</p>
    </div>
    <router-link to="/ConfirmPage">
      <div id="text2"><p>( คลิกเพื่อไปต่อ... )</p></div>
    </router-link>
  </div>
</template>

<style scoped>
.contentApp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.yesornoBtn {
  margin: 20px 20px 20px 20px;
}
.btn {
  margin: 10px 10px 10px 10px;
}
</style>
