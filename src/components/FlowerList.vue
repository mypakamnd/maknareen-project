<script setup>
</script>

<template>
  <div class="contentApp">
    <div class="txt">
      <p>เลือกดอกไม้</p>
      <p>จำกัดดอกไม้แค่ 3 ชนิดเท่านั้น</p>
    </div>
    <div class="flowerList1">
      <div class="flower">
        <div class="image"></div>
        <div class="flowerName"><p>ดอกกุหลาบ</p></div>
      </div>
      <div class="flower">
        <div class="image"></div>
        <div class="flowerName"><p>ดอกทิวลิปสีขาว</p></div>
      </div>
      <div class="flower">
        <div class="image"></div>
        <div class="flowerName"><p>ดอกเดซี่</p></div>
      </div>
      <div class="flower">
        <div class="image"></div>
        <div class="flowerName"><p>ดอกทานตะวัน</p></div>
      </div>
      <div class="flower">
        <div class="image"></div>
        <div class="flowerName"><p>ดอกลิลลี่วอลเล่</p></div>
      </div>
    </div>
    <div class="flowerList2">
      <div class="flower">
        <div class="image"></div>
        <div class="flowerName"><p>ดอกกุหลาบ</p></div>
      </div>
      <div class="flower">
        <div class="image"></div>
        <div class="flowerName"><p>ดอกทิวลิปสีขาว</p></div>
      </div>
      <div class="flower">
        <div class="image"></div>
        <div class="flowerName"><p>ดอกเดซี่</p></div>
      </div>
      <div class="flower">
        <div class="image"></div>
        <div class="flowerName"><p>ดอกทานตะวัน</p></div>
      </div>
      <div class="flower">
        <div class="image"></div>
        <div class="flowerName"><p>ดอกลิลลี่วอลเล่</p></div>
      </div>
    </div>
    <p>ดอกไม้ที่คุณเลือก</p>
    <div class="selectedFlower">
      <div class="flower">
        <div class="image"></div>
        <div class="flowerName"><p>ดอกเดซี่</p></div>
      </div>
      <div class="flower">
        <div class="image"></div>
        <div class="flowerName"><p>ดอกทานตะวัน</p></div>
      </div>
      <div class="flower">
        <div class="image"></div>
        <div class="flowerName"><p>ดอกลิลลี่วอลเล่</p></div>
      </div>
    </div>
    <div class="yesornoBtn">
      <router-link to="/">
        <q-btn
          class="btn"
          style="margin-top: 20px"
          color="white"
          text-color="black"
          label="กลับเข้าสู่หน้าร้านค้า"
        ></q-btn
      ></router-link>

      <router-link to="/WriteMessage">
        <q-btn
          class="btn"
          id="confirm"
          style="margin-top: 20px"
          color="white"
          text-color="black"
          label="เขียนข้อความ"
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
}
.image {
  width: 80px;
  height: 80px;
  background-color: black;
  margin: 10px 10px 10px 10px;
}

.flowerList1 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.flowerList2 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.selectedFlower {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.flower {
  margin: 10px 10px 10px 10px;
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
.yesornoBtn {
  display: flex;
  justify-content: center;
  margin: 20px 20px 20px 20px;
}
#confirm {
  margin-left: 20px;
}
</style>
