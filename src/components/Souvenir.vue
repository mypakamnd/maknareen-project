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
        <img class="img-souvenir" src="../../assets/พวงกุญแจถัก2.png" alt="" />
        <span>พวงกุญแจถัก</span>
      </div>
      <div class="items">
        <img class="img-souvenir" src="../../assets/เทียนหอม.png" alt="" />
        <span>เทียนหอมกลิ่น Blossom Bouquet</span>
      </div>
      <div class="items">
        <img class="img-souvenir" src="../../assets/กระเป๋า.png" alt="" />
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
    <div class="tier-list">
      <div class="tier-1">
        <div class="title">
          <div class="tier-title">Tier 1</div>
          <div class="donate-price">165 baht</div>
        </div>
        <div class="img-tier">
          <img src="../../assets/พวงกุญแจถัก2.png" alt="" />
          <span class="souvenir-title-items">พวงกุญแจถัก</span>
        </div>
      </div>
      <div class="tier-1">
        <div class="title">
          <div class="tier-title">Tier 2</div>
          <div class="donate-price">385 baht</div>
        </div>
        <div class="img-tier">
          <img src="../../assets/พวงกุญแจถัก2.png" alt="" />
          <span class="souvenir-title-items">พวงกุญแจถัก</span>
        </div>
        <div class="img-tier">
          <img src="../../assets/เทียนหอม.png" alt="" />
          <span class="souvenir-title-items"
            >เทียนหอมกลิ่น Blossom Bouquet</span
          >
        </div>
      </div>
      <div class="tier-1">
        <div class="title">
          <div class="tier-title">Tier 2</div>
          <div class="donate-price">595 baht</div>
        </div>
        <div class="img-tier">
          <img src="../../assets/พวงกุญแจถัก2.png" alt="" />
          <span class="souvenir-title-items">พวงกุญแจถัก</span>
        </div>
        <div class="img-tier">
          <img src="../../assets/เทียนหอม.png" alt="" />
          <span class="souvenir-title-items"
            >เทียนหอมกลิ่น Blossom Bouquet</span
          >
        </div>
        <div class="img-tier">
          <img src="../../assets/กระเป๋า.png" alt="" />
          <span class="souvenir-title-items">กระเป๋า ขนาด 14.5×18.5 cm</span>
        </div>
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

.tier-list {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.souvenir-title-items {
  width: auto;
}

img {
  width: 100px;
}
/* Ipad size */
@media screen and (max-width: 1024px) {
  .img-souvenir {
    width: 200px;
    padding: 20px;
  }

  .span {
    font-size: 16px;
  }

  .title {
    padding: 0px 20px 0px 0px;
  }

  .tier-1 {
    width: 650px;
  }

  .souvenir-title-items {
    width: 150px;
  }
}

/* Mobile size */
@media screen and (max-width: 480px) {
  .souvenir-title {
    font-size: 28px;
  }

  .souvenir-sub-title {
    font-size: 14px;
  }

  .img-souvenir {
    width: 80px;
    padding: 0px;
  }

  .items {
    padding: 5px;
  }

  span {
    font-size: 12px;
    width: 100px;
  }

  .souvenir-sub-title-3 {
    font-size: 12px;
    width: 300px;
    padding: 10px;
  }

  .souvenir-sub-title-2[data-v-d0cc7f49] {
    font-size: 14px;
  }

  img {
    width: 50px;
  }

  .tier-1 {
    width: 320px;
  }

  .donate-price {
    font-size: 16px;
  }
  .tier-title {
    font-size: 12px;
  }

  .souvenir-title-items {
    font-size: 10px;
    width: 70px;
  }

  .img-tier {
    padding: 5px;
  }

  .title {
    padding: 0px 10px 0px 0px;
  }
}
</style>
