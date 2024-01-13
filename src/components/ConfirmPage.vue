<script setup>
</script>

<template>
  <div id="q-app" class="contentApp" style="min-height: 100vh">
    <div><p>สนใจจัดช่อดอกไม้เป็นของขวัญให้เค้าไหม</p></div>
    <div class="yesornoBtn">
      <router-link to="/">
        <q-btn
          class="btn"
          style="margin-top: 20px"
          color="white"
          text-color="black"
          label="ไม่ กลับเข้าสู่หน้าร้านค้า"
        ></q-btn
      ></router-link>

      <router-link to="/FlowerList">
        <q-btn
          class="btn"
          id="confirm"
          style="margin-top: 20px"
          color="white"
          text-color="black"
          label="ใช่ ฉันต้องการจัดช่อดอกไม้"
        ></q-btn
      ></router-link>
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

.yesornoBtn {
  display: flex;
  justify-content: center;
  margin: 20px 20px 20px 20px;
}
#confirm {
  margin-left: 20px;
}
</style>
