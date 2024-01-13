<script setup>
import "boxicons";
</script>

<template>
  <section class="cover-section" id="Homepage">
    <div class="scroll-down">
      <a class="scroll-down-btn" href="#schedule" v-smooth-scroll></a>
    </div>
    <nav>
      <a class="menu-title" href="#Homepage" v-smooth-scroll>Homepage</a>

      <div class="line-menu"></div>
      <a class="menu-title" href="#schedule" v-smooth-scroll>Event Schedule</a>
      <div class="line-menu"></div>
      <a class="menu-title" href="#recommended-food" v-smooth-scroll
        >น้องมีนพากิน</a
      >
      <div class="line-menu"></div>
      <a class="menu-title" href="#info" v-smooth-scroll>Info</a>
    </nav>
    <div class="cover-background">
      <div class="leftContainer">
        <div class="txt">
          <div class="title-name">MEENCGM48</div>
          <div class="title-fullname">PITCHAYATHIDA SONTHISAKWANNA</div>
        </div>
        <div class="btn-group">
          <a href="https://www.facebook.com/cgm48official.meen" target="_blank">
            <box-icon
              class="social-icon"
              type="logo"
              name="facebook-circle"
              size="md"
              color="#044560"
            ></box-icon>
          </a>

          <a
            href="https://www.instagram.com/meen.cgm48official/"
            target="_blank"
          >
            <box-icon
              class="social-icon"
              name="instagram-alt"
              type="logo"
              size="md"
              color="#044560"
            ></box-icon>
          </a>

          <a href="https://www.tiktok.com/@meencgm48official" target="_blank">
            <box-icon
              class="social-icon"
              name="tiktok"
              type="logo"
              size="md"
              color="#044560"
            ></box-icon
          ></a>
        </div>
      </div>
      <div class="rightContainer"></div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");

/* Desktop size */
@media only screen and (min-width: 1024px) {
  .scroll-down-btn {
    position: absolute;
    left: 50%;
    bottom: 7%;
    transform: translateX(-50%);
    height: 50px;
    width: 30px;
    border: 2px solid #044560;
    cursor: pointer;
    border-radius: 3em;
  }
  .scroll-down-btn::before {
    position: absolute;
    content: "";
    margin: auto;
    left: 0;
    right: 0;
    top: 0.3em;
    width: 0.6em;
    height: 0.6em;
    background-color: #044560;
    border-radius: 50%;
    animation: move-down 2s infinite;
  }

  @keyframes move-down {
    80% {
      opacity: 0.5;
    }
    100% {
      transform: translateY(2em);
      opacity: 0;
    }
  }
  .scroll-down-btn::after {
    position: absolute;
    content: "SCROLL DOWN";
    font-family: "IBM Plex Sans Thai";
    width: 12em;
    display: block;
    width: 12em;
    text-align: center;
    left: -4.2em;
    bottom: -3em;
    font-size: 0.6em;
    color: #044560;
    letter-spacing: 3px;
    font-weight: 600;
  }
  .cover-background {
    height: 100vh;
    max-width: 100%;
    background-size: cover;
    background-position: center;
    flex-shrink: 0;
    background-image: url("../../assets/CoverImage.png");
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .leftContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  .title-name {
    color: #044560;
    font-family: Quicksand;
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    line-height: 154.689%; /* 61.876px */
  }

  .title-fullname {
    margin: 5px 0px 20px 0px;
    flex-shrink: 0;
    color: #044560;
    font-family: Quicksand;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .btn-group {
    display: flex;
    justify-content: center;
  }

  .q-btn:before {
    box-shadow: none;
  }
  .social-icon {
    margin: 0px 10px 0px 0px;
  }

  nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0px 10px 20px;
    position: absolute;
    top: 0;
  }

  .menu-title {
    color: #044560;
    font-family: "IBM Plex Sans Thai";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 154.689%; /* 61.876px */
  }

  a:link {
    text-decoration: none;
  }

  .line-menu {
    margin: 0px 20px 0px 20px;
    width: 1px;
    height: 20px;
    border: 0.8px solid #044560;
  }
}

/* Ipad size */

@media only screen and (max-width: 1024px) {
  .scroll-down-btn {
    position: absolute;
    left: 50%;
    bottom: 5%;
    transform: translateX(-50%);
    height: 50px;
    width: 30px;
    border: 2px solid #044560;
    cursor: pointer;
    border-radius: 3em;
  }
  .scroll-down-btn::before {
    position: absolute;
    content: "";
    margin: auto;
    left: 0;
    right: 0;
    top: 0.3em;
    width: 0.6em;
    height: 0.6em;
    background-color: #044560;
    border-radius: 50%;
    animation: move-down 2s infinite;
  }

  @keyframes move-down {
    80% {
      opacity: 0.5;
    }
    100% {
      transform: translateY(2em);
      opacity: 0;
    }
  }
  .scroll-down-btn::after {
    position: absolute;
    content: "SCROLL DOWN";
    font-family: "IBM Plex Sans Thai";
    width: 12em;
    display: block;
    width: 12em;
    text-align: center;
    left: -4.2em;
    bottom: -3em;
    font-size: 0.6em;
    color: #044560;
    letter-spacing: 3px;
    font-weight: 600;
  }
  .cover-background {
    height: 100vh;
    max-width: 100%;
    background-size: cover;
    background-position: center;
    flex-shrink: 0;
    background-image: url("../../assets/IpadCoverImage.png");
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .leftContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-left: 40px;
  }

  .title-name {
    color: #044560;
    font-family: Quicksand;
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    line-height: 154.689%; /* 61.876px */
  }

  .title-fullname {
    margin: 5px 0px 20px 0px;
    flex-shrink: 0;
    color: #044560;
    font-family: Quicksand;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .btn-group {
    display: flex;
    justify-content: start;
  }

  .q-btn:before {
    box-shadow: none;
  }
  .social-icon {
    margin: 0px 10px 0px 0px;
  }

  nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0px 10px 20px;
    position: absolute;
    top: 0;
  }

  .menu-title {
    color: #044560;
    font-family: "IBM Plex Sans Thai";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 154.689%; /* 61.876px */
  }

  a:link {
    text-decoration: none;
  }

  .line-menu {
    margin: 0px 20px 0px 20px;
    width: 1px;
    height: 20px;
    border: 0.8px solid #044560;
  }
}

/* mobile size */

@media only screen and (max-width: 480px) {
  .scroll-down-btn {
    position: absolute;
    left: 50%;
    bottom: 8%;
    transform: translateX(-50%);
    height: 50px;
    width: 30px;
    border: 2px solid #044560;
    cursor: pointer;
    border-radius: 3em;
  }
  .scroll-down-btn::before {
    position: absolute;
    content: "";
    margin: auto;
    left: 0;
    right: 0;
    top: 0.3em;
    width: 0.6em;
    height: 0.6em;
    background-color: #044560;
    border-radius: 50%;
    animation: move-down 2s infinite;
  }

  @keyframes move-down {
    80% {
      opacity: 0.5;
    }
    100% {
      transform: translateY(2em);
      opacity: 0;
    }
  }
  .scroll-down-btn::after {
    position: absolute;
    content: "SCROLL DOWN";
    font-family: "IBM Plex Sans Thai";
    width: 12em;
    display: block;
    width: 12em;
    text-align: center;
    left: -4.2em;
    bottom: -3em;
    font-size: 0.6em;
    color: #044560;
    letter-spacing: 3px;
    font-weight: 600;
  }
  .cover-background {
    height: 100vh;
    max-width: 100%;
    background-size: cover;
    background-position: center;
    flex-shrink: 0;
    background-image: url("../../assets/MobileCoverImage.png");
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  .leftContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0px;
    margin-bottom: 32%;
  }

  .txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title-name {
    color: #044560;
    font-family: Quicksand;
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    line-height: 154.689%; /* 61.876px */
  }

  .title-fullname {
    margin: 5px 0px 10px 0px;
    flex-shrink: 0;
    color: #044560;
    font-family: Quicksand;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .btn-group {
    display: flex;
    justify-content: center;
  }

  .q-btn:before {
    box-shadow: none;
  }
  .social-icon {
    margin: 5px 5px 5px 5px;
  }

  nav {
    width: 100%;
    display: none;
    flex-direction: row;
    align-items: center;
    padding: 10px 0px 10px 20px;
    position: fixed;
    top: 0;
  }

  .menu-title {
    color: #044560;
    font-family: "IBM Plex Sans Thai";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 154.689%; /* 61.876px */
    display: none;
  }

  a:link {
    text-decoration: none;
  }

  .line-menu {
    margin: 0px 20px 0px 20px;
    width: 1px;
    height: 20px;
    border: 0.8px solid #044560;
  }
}
</style>
