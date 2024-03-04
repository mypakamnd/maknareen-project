<script setup>
import { ref, onMounted } from "vue";
import { db } from "../firebase/init.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import html2canvas from "html2canvas";

const nextPage = ref("page-first");
const cards = ref([
  {
    name: "กุหลาบขาว",
    image: "../../assets/5.png",
  },
  {
    name: "ดอกทิวลิป",
    image: "../../assets/6.png",
  },
  {
    name: "ดอกทานตะวัน",
    image: "../../assets/7.png",
  },
  {
    name: "ดอกลิลลี่",
    image: "../../assets/8.png",
  },
]);

const birthdayCardCollection = collection(db, "birthdayCard");

const selectedCard = ref(null);
const flowerAmount = ref(null);
const wish = ref(null);
const sender_name = ref(null);
const newDate = ref(Date.now());
const formatted_datetime = ref(
  new Date(newDate.value).toLocaleString("en-US", { timeZone: "Asia/Bangkok" })
);
const preview = ref(false);
const showButton = ref(false);

const TimeDate = ref(Timestamp.fromDate(new Date(newDate.value)));

const intoNextpage = (page) => {
  nextPage.value = page;
};

const selectCard = (index) => {
  selectedCard.value = index;
};

const addCard = (index) => {
  addDoc(birthdayCardCollection, {
    flower_name: cards.value[index].name,
    flower_image: cards.value[index].image,
    amount: flowerAmount.value,
    wish: wish.value,
    sender_name: sender_name.value,
    date: TimeDate.value,
    adminApprove: false,
  });
};

const htmlContent = ref(null); // เปลี่ยนเป็น ref

onMounted(() => {
  htmlContent.value = document.getElementById("modal"); // ดึงอ้างอิงจาก ID ของ HTML
});

const convertHtmlToImage = () => {
  const content = htmlContent.value;
  if (!content) return;

  html2canvas(content, {
    useCORS: true,
    scale: 2, // เพิ่มความละเอียดของภาพ
    // width: content.offsetWidth + 40, // เพิ่มความกว้างเพื่อรวมพื้นที่กรอบรูปที่เพิ่มเข้าไปด้วย
    // height: content.offsetHeight + 40, // เพิ่มความสูงเพื่อรวมพื้นที่กรอบรูปที่เพิ่มเข้าไปด้วย
    // scrollX: 2, // ไม่ต้องการเลื่อนแนวนอน
    // scrollY: 2, // ไม่ต้องการเลื่อนแนวตั้ง
    // x: -20, // หน้า
    // y: -20,
  })
    .then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "GoodPluming21ossom-recipe.png";
      link.href = imgData;
      link.click();
    })
    .catch((error) => {
      console.error("An error occurred while converting HTML to image:", error);
    });
};

const shareToTwitter = () => {
  // สร้าง URL สำหรับการแชร์ไปยัง Twitter
  const hashtags = encodeURIComponent("GoodPluming21ossom,MeenCGM48");
  const shareUrl = `https://twitter.com/intent/tweet?hashtags=${hashtags}`;

  // เปิดหน้าต่างใหม่เพื่อแชร์ไปยัง Twitter
  window.open(shareUrl, "_blank");
};
</script>

<template>
  <div class="contianer">
    <!-- desktop fixed mobile size -->
    <div class="mobile-size">
      <!-- page 1 into shop -->
      <transition>
        <div class="into-shop" v-if="nextPage === 'page-first'">
          <span class="welcome-title">ยินดีต้อนรับเข้าสู่</span>
          <span class="shop-name">Goodpluming21ossomShop</span>
          <button class="outline-button" @click="intoNextpage('page-sec')">
            เข้าสู่ร้านค้า
          </button>
        </div>
      </transition>

      <!-- page 2 question -->
      <transition>
        <div
          class="question"
          v-if="nextPage === 'page-sec'"
          @click="showButton = !showButton"
        >
          <img class="question-gif" src="../../assets/question.gif" alt="" />
          <transition>
            <div class="show-btn" v-if="showButton">
              <button
                class="outline-button-select"
                @click="intoNextpage('page-third')"
              >
                เลือกช่อดอกไม้
              </button>
              <button
                class="outline-button-back"
                @click="intoNextpage('page-first')"
              >
                ไม่ล่ะ ขอบคุณ
              </button>
            </div>
          </transition>
        </div>
      </transition>
      <!-- page 3 selected flower and input flower amount -->
      <transition>
        <div class="shop-detail" v-if="nextPage === 'page-third'">
          <span class="select-flower">เลือกดอกไม้</span>
          <div class="card-container">
            <div
              v-for="(card, index) in cards"
              :key="index"
              class="card"
              :class="{ selected: selectedCard === index }"
              @click="selectCard(index)"
            >
              <img :src="card.image" alt="Card Image" class="flower-image" />
              <span class="flower-name">
                {{ card.name }}
              </span>
            </div>
          </div>
          <label class="flower-amount-label">จำนวนดอกไม้</label>
          <input
            class="flower-amount-input"
            type="text"
            v-model="flowerAmount"
            placeholder="0"
            style="text-align: center"
          />
          <button
            class="outline-button-card"
            @click="intoNextpage('page-fourth')"
          >
            เขียนการ์ดอวยพร
          </button>
        </div>
      </transition>

      <!-- page 4 writen-card -->
      <transition>
        <div class="writen-card" v-if="nextPage === 'page-fourth'">
          <label class="select-flower">เขียนการ์ดอวยพร</label>
          <textarea
            maxlength="280"
            placeholder="Wish you..."
            class="message"
            v-model="wish"
          ></textarea>
          <div class="sender">
            <label class="select-flower">ชื่อผู้ส่งมอบ</label>
            <input
              class="sender-name-input"
              type="text"
              v-model="sender_name"
              placeholder="กรุณากรอกชื่อผู้ส่งมอบดอกไม้"
            />
          </div>
          <button
            class="outline-button-send"
            @click="addCard(selectedCard), intoNextpage('page-fifth')"
          >
            ส่งมอบดอกไม้
          </button>
          <button
            class="outline-button-back"
            @click="intoNextpage('page-third')"
          >
            ย้อนกลับ
          </button>
        </div>
      </transition>
      <div class="order-success" v-if="nextPage === 'page-fifth'">
        <span class="order-complete">Order Complete!!</span>
        <div class="background-recipe">
          <div class="recipe" id="recipe">
            <span class="recipe-shop-name">Goodpluming21ossom</span>
            <span class="recipe-shop-title">รายการคำสั่งซื้อของคุณ</span>
            <div class="recipe-flower">
              <span class="recipe-title">ดอกไม้</span>
              <span class="recipe-value">{{ cards[selectedCard].name }}</span>
            </div>
            <div class="recipe-flower">
              <span class="recipe-title">จำนวนดอกไม้ </span>
              <span class="recipe-value">{{ flowerAmount }}</span>
            </div>
            <div class="recipe-wish">
              <span class="recipe-title">ข้อความบนการ์ด </span>
              <span class="recipe-wish-title">{{ wish }}</span>
            </div>
            <div class="recipe-flower">
              <span class="recipe-title">ชื่อผู้ส่ง </span>
              <span class="recipe-value">{{ sender_name }}</span>
            </div>
            <span class="recipe-dateTime">{{ formatted_datetime }}</span>
            <span class="recipe-shop-title"
              >----------------------------------</span
            >
            <div class="footer">
              <span class="recipe-shop-title"
                >ขอบคุณสำหรับคำสั่งซื้อ
                ทางร้านจะจัดส่งช่อดอกไม้ให้คุณคนพิเศษถึงมืออย่างดี</span
              >
            </div>
          </div>
        </div>
        <button class="outline-button-download" @click="convertHtmlToImage()">
          ดาวน์โหลดใบเสร็จ
        </button>

        <button class="outline-button-share" @click="shareToTwitter()">
          แชร์ไป Twitter
        </button>
        <Teleport to="body">
          <div class="modal" id="modal" ref="htmlContent">
            <img class="pups" src="../../assets/pups.png" alt="" />
            <div class="recipe">
              <span class="recipe-shop-name">Goodpluming21ossom</span>
              <span class="recipe-shop-title">รายการคำสั่งซื้อของคุณ</span>
              <div class="recipe-flower">
                <span class="recipe-title">ดอกไม้</span>
                <span class="recipe-value">{{ cards[selectedCard].name }}</span>
              </div>
              <div class="recipe-flower">
                <span class="recipe-title">จำนวนดอกไม้ </span>
                <span class="recipe-value">{{ flowerAmount }}</span>
              </div>
              <div class="recipe-wish">
                <span class="recipe-title">ข้อความบนการ์ด </span>
                <span class="recipe-wish-title">{{ wish }}</span>
              </div>
              <div class="recipe-flower">
                <span class="recipe-title">ชื่อผู้ส่ง </span>
                <span class="recipe-value">{{ sender_name }}</span>
              </div>
              <span class="recipe-dateTime">{{ formatted_datetime }}</span>
              <span class="recipe-shop-title"
                >----------------------------------</span
              >
              <div class="footer">
                <span class="recipe-shop-title"
                  >ขอบคุณสำหรับคำสั่งซื้อ
                  ทางร้านจะจัดส่งช่อดอกไม้ให้คุณคนพิเศษถึงมืออย่างดี</span
                >
              </div>
            </div>
            <p class="credit">@NonMernCGN48 x @Maknareen</p>
          </div>
        </Teleport>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contianer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  overflow-y: scroll;
}
.mobile-size {
  width: 460px;
  height: 100dvh;
  background-image: url("../../assets/shopBackground.gif");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: aliceblue;
}

.into-shop {
  transition: opacity 0.5s ease;
  height: 100dvh;
}

.welcome-title {
  color: #044560;
  font-family: "IBM Plex Sans Thai";
  font-size: 18px;
  position: absolute;
  left: 50%;
  bottom: 55%;
  transform: translateX(-50%);
}
.shop-name {
  color: #044560;
  font-family: Quicksand;
  font-size: 24px;
  font-weight: 700;
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translateX(-50%);
}
.outline-button {
  position: absolute;
  left: 50%;
  bottom: 30%;
  transform: translateX(-50%);
  background-color: transparent;
  color: #ffffff;
  background-color: #044560;
  border: 2px solid #044560;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  font-family: "IBM Plex Sans Thai";
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* .outline-button:hover {
  background-color: #ffffff;
  color: #044560;
} */

.outline-button-card {
  background-color: transparent;
  color: #ffffff;
  background-color: #044560;
  border: 2px solid #044560;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  font-family: "IBM Plex Sans Thai";
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* .outline-button-card:hover {
  background-color: #ffffff;
  color: #044560;
} */

.shop-detail {
  height: 100dvh;
  padding: 30px 30px 0px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}
.select-flower {
  color: #044560;
  font-family: "IBM Plex Sans Thai";
  font-size: 20px;
  padding: 10px;
}

.sub-title {
  color: #044560;
  font-family: "IBM Plex Sans Thai";
  font-size: 16px;
  padding: 10px;
}

.flower-name {
  color: #044560;
  font-family: "IBM Plex Sans Thai";
  font-size: 16px;
  padding: 5px 0px 0px 0px;
}

.flower-amount-label {
  color: #044560;
  font-family: "IBM Plex Sans Thai";
  font-size: 20px;
  margin-top: 20px;
  padding: 10px;
  font-weight: 500;
}

.flower-amount-input {
  font-family: "IBM Plex Sans Thai";
  color: #044560;
  font-size: 1rem;
  margin: 0px 0px 20px 0px;
  padding: 10px 10px;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: #5ea9c9 solid 1px;
  display: block;
  transition: all 0.3s;
}
.card-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  width: 180px;
  height: 200px;
  border-radius: 12px;
  background-color: rgb(255, 255, 255);
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.flower-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.selected {
  border: 2px solid #044560;
}

::placeholder {
  color: #5ea9c9;
  opacity: 0.5; /* Firefox */
}

.writen-card {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 30px;
}

.order-success {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 30px;
}

.message {
  font-family: "IBM Plex Sans Thai";
  width: 350px;
  padding: 20px;
  height: 350px;
  border: #5ea9c9 solid 1px;
  border-radius: 12px;
  resize: none;
  color: #044560;
  font-size: 1rem;
}

textarea:focus,
input:focus {
  outline: none;
}

.sender {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.outline-button-send {
  width: 180px;
  background-color: transparent;
  color: #ffffff;
  background-color: #044560;
  border: 2px solid #044560;
  margin-top: 10px;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  font-family: "IBM Plex Sans Thai";
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* .outline-button-send:hover {
  background-color: #ffffff;
  color: #044560;
} */

.outline-button-back {
  width: 180px;
  background-color: transparent;
  color: #044560;
  border: 2px solid #044560;
  margin-top: 10px;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  font-family: "IBM Plex Sans Thai";
  transition: background-color 0.3s ease, color 0.3s ease;
}

.outline-button-share {
  width: 200px;
  background-color: transparent;
  color: #044560;
  border: 2px solid #044560;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  font-family: "IBM Plex Sans Thai";
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* .outline-button-back:hover {
  background-color: #044560;
  color: #ffffff;
} */
.sender-name-input {
  width: 350px;
  font-family: "IBM Plex Sans Thai";
  color: #044560;
  font-size: 1rem;
  margin: 0px 0px 20px 0px;
  padding: 10px 10px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  border: #5ea9c9 solid 1px;
  display: block;
  transition: all 0.3s;
}

.recipe {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  background-color: #ffffff;
  border-radius: 12px;
  border: #5ea9c9 solid 1px;
  padding: 20px;
}

.recipe-shop-name {
  color: #044560;
  font-family: Quicksand;
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 5px;
  text-align: center;
}

.recipe-shop-title {
  color: #044560;
  font-family: "IBM Plex Sans Thai";
  font-size: 14px;
  text-align: center;
  padding: 10px 0px;
}
.recipe-flower {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0px;
}

.recipe-title {
  color: #044560;
  font-family: "IBM Plex Sans Thai";
  font-size: 14px;
  font-weight: 700;
}

.recipe-value {
  color: #044560;
  font-family: "IBM Plex Sans Thai";
  font-size: 14px;
  font-weight: 500;
}

.recipe-wish {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px 0px;
}

.recipe-wish-title {
  color: #044560;
  font-family: "IBM Plex Sans Thai";
  font-size: 14px;
  font-weight: 500;
  margin: 5px 0px;
}

.recipe-dateTime {
  color: #044560;
  font-family: "IBM Plex Sans Thai";
  font-size: 14px;
  font-weight: 500;
  margin: 20px 0px;
  text-align: center;
}

.order-complete {
  color: #044560;
  font-family: "IBM Plex Sans Thai";
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.outline-button-download {
  background-color: transparent;
  color: #ffffff;
  background-color: #044560;
  border: 2px solid #044560;
  margin: 20px 0px;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  font-family: "IBM Plex Sans Thai";
  transition: background-color 0.3s ease, color 0.3s ease;
}
.outline-button-select {
  background-color: transparent;
  color: #ffffff;
  background-color: #044560;
  border: 2px solid #044560;
  margin: 10px 0px;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  font-family: "IBM Plex Sans Thai";
  transition: background-color 0.3s ease, color 0.3s ease;
}
#recipe {
  width: fit-content; /* ทำให้ div มีขนาดเท่ากับเนื้อหาภายใน */
  margin: auto; /* จัดตำแหน่ง div ตรงกลาง */
}

.modal {
  background-image: url("../../assets/recipeBG.png") !important;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 500px;
  padding: 0px 50px 50px 50px;
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.pups {
  width: 200px;
  display: inline;
  position: relative;
  top: 25px;
}

.credit {
  font-size: 14px;
  font-family: "IBM Plex Sans Thai";
  opacity: 0.5;
  margin-top: 10px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.question {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  padding: 30px;
}

.question-text {
  color: #044560;
  font-family: "IBM Plex Sans Thai";
  font-size: 18px;
  text-align: center;
}
.question-gif {
  width: 350px;
  position: fixed;
}

.show-btn {
  display: flex;
  position: fixed;
  left: 50%;
  bottom: 20%;
  transform: translateX(-50%);
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* Mobile size */
@media screen and (max-width: 480px) {
  .mobile-size {
    width: 100%;
    height: 100dvh;
  }
  .shop-detail {
    padding: 20px;
  }

  .card {
    width: 150px;
    height: 175px;
    margin: 5px;
  }

  .flower-image {
    width: 130px;
    height: 130px;
    object-fit: cover;
    border-radius: 8px;
  }
  .message {
    width: 100%;
  }

  .sender {
    width: 100%;
  }
  .sender-name-input {
    width: 100%;
  }
}
</style>
