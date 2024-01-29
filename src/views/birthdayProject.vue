<script setup>
import BirthdayCountdown from "../components/BirthdayCountdown.vue";
import DonationTotal from "../components/DonationTotal.vue";
import Souvenir from "../components/Souvenir.vue";
</script>

<template>
  <BirthdayCountdown />
  <DonationTotal />
  <Souvenir />
  <section id="footer">
    <div class="footer">
      <div class="txt-title">
        <img
          class="img-logo"
          src="../../assets/maknareen2.png"
          alt=""
          style="width: 70px"
        />

        <div class="made-by">© 2024 Maknareen x NonMernCGN48</div>
        <div class="image-by">
          <div class="thank-you-title">ขอบคุณรูปภาพและโลโก้จาก</div>
          <a
            href="https://twitter.com/lnwearthza007"
            style="color: #044560"
            target="_blank"
            ><div class="facebook-page-link">โลก's</div></a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.footer {
  width: 100%;
  height: 192px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8fafc;
  padding: 100px 0px;
}

.image-by {
  display: flex;
  flex-direction: row;
}

.txt-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.made-by {
  color: #848484;
  font-family: "IBM Plex Sans Thai";
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.thank-you-title {
  color: #848484;
  font-family: "IBM Plex Sans Thai";
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.facebook-page-link {
  padding-left: 5px;
  color: #044560;
  font-family: "IBM Plex Sans Thai";
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

/* Ipad size */
@media screen and (max-width: 1024px) {
}

/* Mobile size */
@media screen and (max-width: 480px) {
  .footer {
    flex-direction: column;
    justify-content: center;
  }

  .txt-title {
    padding-left: 0px;
  }

  .made-by {
    font-size: 12px;
  }

  .thank-you-title {
    font-size: 12px;
  }

  .facebook-page-link {
    font-size: 12px;
  }

  .menu-list {
    margin-top: 20px;
  }
}
</style>