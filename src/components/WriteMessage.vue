<script setup>
</script>

<template>
  <div class="contentApp">
    <div class="txt">
      <p>ดอกไม้ที่คุณเลือก</p>
    </div>
    <div class="selectedFlower">
      <div class="flower">
        <div class="image"></div>
        <div class="flowerName"><p>ดอกเดซี่</p></div>
        <div class="flowerName"><p>ดอกเดซี่ น. ความรักบริสุทธิ์</p></div>
      </div>
      <div class="flower">
        <div class="image"></div>
        <div class="flowerName"><p>ดอกทานตะวัน</p></div>
        <div class="flowerName"><p>ดอกทานตะวัน น. ความรักบริสุทธิ์</p></div>
      </div>
      <div class="flower">
        <div class="image"></div>
        <div class="flowerName"><p>ดอกลิลลี่วอลเล่</p></div>
        <div class="flowerName"><p>ดอกลิลลี่วอลเล่ น. ความรักบริสุทธิ์</p></div>
      </div>
    </div>
    <div class="inputMessage">
      <div class="yourMessage">
        <q-input type="textarea" outlined style="height: 100%"></q-input>
      </div>
      <div class="yourName">
        <q-input outlined style="width: 300px"></q-input>
      </div>
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
.image {
  width: 120px;
  height: 120px;
  background-color: black;
  margin: 10px 10px 10px 10px;
}

.selectedFlower {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.flower {
  margin: 10px 10px 10px 10px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  display: flex;
  justify-content: center;
}

.txt {
  margin-top: 20px;
}

.inputMessage {
  width: 700px;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
}
.yourName {
  margin-top: 20px;
  display: flex;
  justify-content: end;
}

.yourMessage {
  height: auto;
}
</style>
