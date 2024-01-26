<script setup>
</script>

<template>
  <div class="souvenir" id="souvenir">
    <div class="souvenir-title">ของที่ระลึก</div>
    <div class="souvenir-sub-title">
      ของที่ระลึกสำหรับผู้ที่โดเนท Goodpluming21ossom Project
    </div>
    <div class="all-souvenir">
      <div class="items">
        <img class="img-souvenir" src="../../assets/keychain.png" alt="" />
        <span>พวงกุญแจถัก</span>
      </div>
      <div class="items">
        <img class="img-souvenir" src="../../assets/candle.png" alt="" />
        <span>เทียนหอมกลิ่น Blossom Bouquet</span>
      </div>
      <div class="items">
        <img class="img-souvenir" src="../../assets/wallet.png" alt="" />
        <span>กระเป๋า ขนาด 14.5×18.5 cm</span>
      </div>
    </div>
    <div class="souvenir-sub-title-3">
      ** ตัวอย่างของที่ระลึกเป็นเพียง mockup เท่านั้น preview
      ของที่ระลึกจะเปิดให้ชมเร็ว ๆ นี้ **
    </div>
    <div class="souvenir-sub-title-2">
      เมื่อโดเนทถึงแต่ละ Tier จะได้รับของที่ระลึกตามลำดับ
    </div>
    <div class="tier-1">
      <div class="title">
        <div class="tier-title">Tier 1</div>
        <div class="donate-price">165 baht</div>
      </div>
      <div class="img-tier">
        <img src="../../assets/keychain.png" style="width: 100px" alt="" />
        <span>พวงกุญแจถัก</span>
      </div>
    </div>
    <div class="tier-1">
      <div class="title">
        <div class="tier-title">Tier 2</div>
        <div class="donate-price">385 baht</div>
      </div>
      <div class="img-tier">
        <img src="../../assets/keychain.png" style="width: 100px" alt="" />
        <span>พวงกุญแจถัก</span>
      </div>
      <div class="img-tier">
        <img src="../../assets/candle.png" style="width: 100px" alt="" />
        <span>เทียนหอมกลิ่น Blossom Bouquet</span>
      </div>
    </div>
    <div class="tier-1">
      <div class="title">
        <div class="tier-title">Tier 2</div>
        <div class="donate-price">595 baht</div>
      </div>
      <div class="img-tier">
        <img src="../../assets/keychain.png" style="width: 100px" alt="" />
        <span>พวงกุญแจถัก</span>
      </div>
      <div class="img-tier">
        <img src="../../assets/candle.png" style="width: 100px" alt="" />
        <span>เทียนหอมกลิ่น Blossom Bouquet</span>
      </div>
      <div class="img-tier">
        <img src="../../assets/wallet.png" style="width: 100px" alt="" />
        <span>กระเป๋า ขนาด 14.5×18.5 cm</span>
      </div>
    </div>

    <a
      class="outline-button"
      href="https://forms.gle/BpB4XoYDfExvinhX8"
      target="_blank"
      >กรอกแบบฟอร์มเพิ่อรับของที่ระลึก</a
    >
  </div>
</template>

<style scoped>
.souvenir {
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.souvenir-title {
  font-family: "IBM Plex Sans Thai";
  text-align: center;
  font-size: 45px;
  font-style: normal;
  font-weight: 500;
  padding: 50px 0px 0px 0px;
  color: #044560;
}

.souvenir-sub-title {
  font-family: "IBM Plex Sans Thai";
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  color: #044560;
  padding: 10px;
}

.souvenir-sub-title-2 {
  font-family: "IBM Plex Sans Thai";
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  color: #044560;
  padding: 80px 0px 30px 0px;
}

.souvenir-sub-title-3 {
  font-family: "IBM Plex Sans Thai";
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  color: #044560;
  padding: 5px;
  opacity: 50%;
}

.all-souvenir {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.img-souvenir {
  width: 250px;
  padding: 20px;
}

.items {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

span {
  font-family: "IBM Plex Sans Thai";
  text-align: center;
  font-size: 18px;
  font-style: normal;
  color: #044560;
}

.tier-1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 800px;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 50px 0px 0px;
}

.img-tier {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.tier-title {
  font-family: "IBM Plex Sans Thai";
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  color: #044560;
}

.donate-price {
  font-family: "IBM Plex Sans Thai";
  text-align: center;
  font-size: 24px;
  font-style: normal;
  color: #044560;
  font-weight: 700;
}

.outline-button {
  background-color: transparent;
  color: #044560;
  border: 2px solid #044560;
  padding: 10px 15px;
  margin: 50px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: "IBM Plex Sans Thai";
}
.outline-button:hover {
  background-color: #044560;
  color: #fff;
}

a:link {
  text-decoration: none;
}
</style>
