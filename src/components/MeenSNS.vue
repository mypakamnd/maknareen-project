<script setup>
</script>

<template>
  <section id="official-social-network">
    <div class="social-network">
      <div class="social-network-title">Social Network</div>
      <div class="social-network-sub-title">
        ช่องทางการติดตามข่าวสารและงานต่าง ๆ ของน้องมีน
      </div>
      <div class="social-detail">
        <div class="official-social-detail">
          <div class="official-social-title">Official Account</div>
          <div>
            <a
              href="https://www.facebook.com/cgm48official"
              class="facebook-social"
              target="_blank"
            >
              <box-icon
                class="social-icon"
                type="logo"
                name="facebook-circle"
                size="md"
                color="#1C7DF6"
              ></box-icon>
              <span style="color: #1c7df6">CGM48</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/cgm48official.meen"
              class="facebook-social"
              target="_blank"
            >
              <box-icon
                class="social-icon"
                type="logo"
                name="facebook-circle"
                size="md"
                color="#1C7DF6"
              ></box-icon>
              <span style="color: #1c7df6">Meen CGM48</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/meen.cgm48official/"
              class="instagram-social"
              target="_blank"
            >
              <box-icon
                class="social-icon"
                name="instagram-alt"
                type="logo"
                size="md"
                color="#D82D7E"
              ></box-icon>
              <span style="color: #d82d7e">meen.cgm48official</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.tiktok.com/@meencgm48official"
              class="tiktok-social"
              target="_blank"
            >
              <box-icon
                class="social-icon"
                name="tiktok"
                type="logo"
                size="md"
                color="#044560"
              ></box-icon>
              <span style="color: #044560">meencgm48official</span>
            </a>
          </div>
        </div>
        <div class="official-social-detail">
          <div class="official-social-title">Fanclub Support Account</div>
          <div>
            <a
              href="https://twitter.com/NonMernCGN48"
              class="twitter-social"
              target="_blank"
            >
              <box-icon
                class="social-icon"
                type="logo"
                name="twitter"
                size="md"
                color="#1D9BF0"
              ></box-icon>
              <span style="color: #1d9bf0">NonMernCGN48</span>
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/AllForPitchMnee"
              class="twitter-social"
              target="_blank"
            >
              <box-icon
                class="social-icon"
                type="logo"
                name="twitter"
                size="md"
                color="#1D9BF0"
              ></box-icon>
              <span style="color: #1d9bf0">PickMnee</span>
            </a>
          </div>
          <div>
            <a
              href="https://line.me/ti/g2/KAta6YMlOBqTYbLCn3ap29S_tn2U84G45k3GUg?utm_source=invitation&utm_medium=link_c"
              class="line-social"
              target="_blank"
            >
              <box-icon
                type="solid"
                name="group"
                size="md"
                color="#1ED760"
              ></box-icon>
              <span style="color: #1ed760">NonMernCGN48 OPC</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.social-detail {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
}
.social-network {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0px 150px 0px;
}

.official-social-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.social-network-title {
  flex-shrink: 0;
  color: #044560;
  font-family: "IBM Plex Sans Thai";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.social-network-sub-title {
  font-family: "IBM Plex Sans Thai";
  font-size: 22px;
  font-weight: 500;
  color: #044560;
}

.official-social-title {
  flex-shrink: 0;
  color: #044560;
  font-family: "IBM Plex Sans Thai";
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 20px 0px 10px 0px;
}

.socials {
  width: 400px;
  background-color: #aed7e8;
  padding: 15px 15px 15px 15px;
  margin: 10px 10px 10px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.facebook-social {
  width: 400px;
  background-color: #e7f1ff;
  padding: 15px 15px 15px 15px;
  margin: 5px 10px 5px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.facebook-social:hover {
  background-color: #ffffff;
}

.instagram-social {
  width: 400px;
  background-color: #ffedf6;
  padding: 15px 15px 15px 15px;
  margin: 5px 10px 5px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.instagram-social:hover {
  background-color: #ffffff;
}

.tiktok-social {
  width: 400px;
  background-color: #f1f1f1;
  padding: 15px 15px 15px 15px;
  margin: 5px 10px 5px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.tiktok-social:hover {
  background-color: #ffffff;
}

.twitter-social {
  width: 400px;
  background-color: #e3f3ff;
  padding: 15px 15px 15px 15px;
  margin: 5px 10px 5px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.twitter-social:hover {
  background-color: #ffffff;
}
.line-social {
  width: 400px;
  background-color: #d7ffe5;
  padding: 15px 15px 15px 15px;
  margin: 5px 10px 5px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.line-social:hover {
  background-color: #ffffff;
}

span {
  flex-shrink: 0;
  font-family: "IBM Plex Sans Thai";
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-left: 10px;
}

a:link {
  text-decoration: none;
}

/* Ipad size */
@media screen and (max-width: 1024px) {
  .social-detail {
    flex-wrap: wrap;
  }

  .official-social-title {
    padding: 30px 0px 10px 0px;
  }

  .social-network-title {
    font-size: 30px;
  }

  .social-network-sub-title {
    font-size: 16px;
  }
  .facebook-social {
    width: 320px;
  }

  .instagram-social {
    width: 320px;
  }

  .tiktok-social {
    width: 320px;
  }

  .twitter-social {
    width: 320px;
  }

  .line-social {
    width: 320px;
  }
}

/* Mobile size */
@media screen and (max-width: 480px) {
  .facebook-social {
    width: 320px;
  }

  .instagram-social {
    width: 320px;
  }

  .tiktok-social {
    width: 320px;
  }

  .twitter-social {
    width: 320px;
  }

  .line-social {
    width: 320px;
  }
}
</style>
