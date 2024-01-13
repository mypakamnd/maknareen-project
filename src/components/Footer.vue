<script setup>
</script>

<template>
  <section id="footer">
    <div class="footer">
      <div class="txt-title">
        <div class="maknareen-logo">
          <img
            src="../../assets/logo-no-background.png"
            alt=""
            style="width: 100px"
          />
        </div>
        <div class="made-by">© 2024 Maknareen</div>
        <div class="image-by">
          <div class="thank-you-title">ขอบคุณรูปภาพจาก</div>
          <a
            href="https://www.facebook.com/profile.php?id=100057394691595"
            style="color: #ff84f9"
            ><div class="facebook-page-link">พริกป่น48</div></a
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
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
  color: #ff84f9;
  font-family: "IBM Plex Sans Thai";
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.maknareen-logo {
  width: 100px;
  height: 30px;
  margin-bottom: 10px;
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
