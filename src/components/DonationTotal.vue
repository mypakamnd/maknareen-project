<script setup>
import { ref, watch, onMounted } from "vue";
import { db } from "../firebase/init.js";
import { collection, onSnapshot } from "firebase/firestore";

const scheduleCollection = collection(db, "donateTotal");
const donateTotal = ref();
const updateLasted = ref();

const totals = ref([]);
onMounted(async () => {
  onSnapshot(scheduleCollection, (querySnapshot) => {
    const donateTotals = [];
    querySnapshot.forEach((doc) => {
      const total = {
        id: doc.id,
        donateTotal: doc.data().donateTotal,
        lastedUpdate: doc.data().lastedUpdate,
      };

      donateTotals.push(total);
    });
    totals.value = donateTotals;
    donateTotal.value = donateTotals[0].donateTotal;
    updateLasted.value = donateTotals[0].lastedUpdate;
  });
});
</script>

<template>
  <div class="donation-total" id="donation-total">
    <div class="donation-Goal-title">Goodpluming21ossom</div>
    <div class="donation-title">Donation Total</div>
    <div class="total-donate-card">
      <div class="total-and-baht">
        <img class="flower-icon" src="../../assets/ดอกไม้2.png" alt="" />
        <div class="donation-total-number">{{ donateTotal }}</div>
        <div class="donation-baht">baht</div>
        <img class="flower-icon" src="../../assets/ดอกไม้2.png" alt="" />
      </div>
      <div class="lasted-update-title">Lasted Update : {{ updateLasted }}</div>
      <div class="lasted-update-title">
        ** ยอดโดเนททั้งหมดยังไม่ถูกหักค่าใช้จ่ายต่าง ๆ **
      </div>
    </div>
    <div class="description">
      <div class="leftpercent">
        <div class="icon-and-percent">
          <img src="../../assets/บริจาค.png" alt="" />
          <span class="percentage-number">80%</span>
        </div>
        <div class="span-description">
          <span class="percentage-description"
            >80% ของยอดโดเนทจะถูกนำไปบริจาคให้เด็กกำพร้าและสุนัขและแมวจร</span
          >
        </div>
      </div>
      <div class="line"></div>
      <div class="leftpercent">
        <div class="icon-and-percent">
          <img src="../../assets/cafe.png" />
          <span class="percentage-number">20%</span>
        </div>
        <div class="span-description">
          <span class="percentage-description"
            >20% ของยอดโดเนท จะถูกนำไปทำ project โดยจะมี รถแดง, คาเฟ่ CNX &
            BKK</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.donation-total {
  font-family: Quicksand;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100svh;
}
.donation-Goal-title {
  font-family: Quicksand;
  text-align: center;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  padding: 50px 0px 10px 0px;
  color: #044560;
}

.total-donate-card {
  padding: 40px 150px 40px 150px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.donation-title {
  color: #044560;
  font-family: Quicksand;
  font-size: 30px;
  text-align: center;
}

.donation-total-number {
  color: #044560;
  font-family: Quicksand;
  font-size: 100px;
  font-weight: 700;
  text-align: center;
}

.donation-baht {
  color: #044560;
  font-family: Quicksand;
  font-size: 22px;
  text-align: center;
  padding: 60px 0px 0px 20px;
}

.lasted-update-title {
  color: #044560;
  font-family: "IBM Plex Sans Thai";
  font-size: 18px;
  text-align: center;
  padding: 5px;
}

.total-and-baht {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.flower-icon {
  width: 50px;
  margin: 0px 40px 0px 40px;
}

.description {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px;
}

.leftpercent {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
}

.icon-and-percent {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.percentage-number {
  color: #044560;
  font-family: Quicksand;
  font-size: 40px;
  text-align: center;
  font-weight: 600;
  padding: 10px;
}

.percentage-description {
  color: #044560;
  font-family: "IBM Plex Sans Thai";
  font-size: 18px;
  text-align: center;
}

.span-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px 50px 0px;
}

.line {
  width: 3px;
  height: 200px;
  background-color: #044560;
  margin: 0px 20px 0px 20px;
}

img {
  width: 100px;
}
/* Ipad size */
@media screen and (max-width: 1024px) {
  .donation-total {
    height: auto;
  }

  .description {
    padding: 30px 0px 100px 0px;
  }
}

/* Mobile size */
@media screen and (max-width: 480px) {
  .donation-Goal-title {
    font-size: 28px;
  }

  .donation-title {
    font-size: 20px;
  }
  .donation-total-number {
    font-size: 40px;
  }

  .donation-baht {
    font-size: 12px;
    padding: 20px 00px 0px 5px;
  }

  .flower-icon {
    width: 30px;
    margin: 0px 10px 0px 10px;
  }

  .total-donate-card {
    padding: 40px 0px 40px 0px;
    border-radius: 20px;
  }

  .lasted-update-title {
    font-size: 12px;
  }
  .line {
    width: 2px;
    margin: 0px 10px 0px 10px;
  }

  img {
    width: 70px;
  }

  .percentage-number {
    font-size: 30px;
  }

  .percentage-description {
    font-size: 12px;
  }

  .leftpercent {
    width: 150px;
  }
}
</style>
