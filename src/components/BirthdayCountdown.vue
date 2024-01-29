<template>
  <div id="countdown">
    <div class="scroll-down">
      <a class="scroll-down-btn" href="#donation-total" v-smooth-scroll></a>
    </div>
    <nav class="menu-nav">
      <a class="menu-title" href="#donation-total" v-smooth-scroll
        >Donation Total</a
      >

      <div class="line-menu"></div>
      <a class="menu-title" href="#souvenir" v-smooth-scroll>ของที่ระลึก</a>
    </nav>
    <div class="countdown-title">Donate countdown</div>
    <div class="countdown">
      <div class="countdown-time">
        <span class="days">{{ days }}</span>
        <span class="label">Days</span>
      </div>
      <div class="countdown-time">
        <span class="hours">{{ hours }}</span>
        <span class="label">Hours</span>
      </div>
      <div class="countdown-time">
        <span class="minutes">{{ minutes }}</span>
        <span class="label">Minutes</span>
      </div>
      <div class="countdown-time">
        <span class="seconds">{{ seconds }}</span>
        <span class="label">Seconds</span>
      </div>
    </div>
    <div class="donation-date">Donation Date : 10 JAN 2024 - 16 FEB 2023</div>
    <div class="birthday-project">
      <router-link to="/"
        ><button class="outline-button">Back to Homepage</button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      endTime: new Date("February 16, 2024 00:00:00").getTime(),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  created() {
    this.updateCountdown();
  },
  methods: {
    updateCountdown() {
      const now = new Date().getTime();
      const distance = this.endTime - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance > 0) {
        setTimeout(this.updateCountdown, 1000);
      }
    },
  },
};
</script>

<style scoped>
.birthday-project {
  display: flex;
  align-items: center;
  justify-content: center;
}

.outline-button {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  padding: 10px 10px;
  margin: 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.outline-button:hover {
  background-color: #ffffff;
  color: #2c3e50;
}
.scroll-down-btn {
  position: absolute;
  left: 50%;
  bottom: 7%;
  transform: translateX(-50%);
  height: 50px;
  width: 30px;
  border: 2px solid #ffffff;
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
  background-color: #ffffff;
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
  color: #ffffff;
  letter-spacing: 3px;
  font-weight: 600;
}

#countdown {
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  height: 100svh;
  background-image: url("../../assets/landscapeBackground3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding: 100px 0px 0px 0px;
}

.countdown {
  font-size: 4em;
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  font-family: Quicksand;
}

.countdown > span {
  display: block;
  width: 80px;
  color: #ffffff;
}

.label {
  font-size: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
  padding: 0px 20px;
}

.countdown-title {
  font-family: Quicksand;
  text-align: center;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  padding: 0px 0px 40px 0px;
  color: #ffffff;
}

.countdown-time {
  display: flex;
  flex-direction: row;
  padding: 20px 0px 0px 0px;
  justify-content: center;
  color: #ffffff;
  align-items: center;
}

.donation-date {
  font-family: Quicksand;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  padding: 0px;
}

.menu-nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px 10px 20px;
  position: absolute;
  top: 0;
}

.menu-title {
  color: #ffffff;
  font-family: "IBM Plex Sans Thai";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 154.689%; /* 61.876px */
}

a:link {
  text-decoration: none;
}

a:link:hover {
  text-decoration-line: underline;
  text-decoration-color: #ffffff;
}

.line-menu {
  margin: 0px 20px 0px 20px;
  width: 1px;
  height: 20px;
  border: 0.8px solid #ffffff;
}

/* Mobile size */
@media screen and (max-width: 480px) {
  #countdown {
    flex-direction: column;
  }

  .countdown {
    flex-direction: row;
    font-size: 3em;
  }

  .menu-nav {
    display: none;
  }
  .countdown-title {
    font-size: 28px;
    padding: 50px;
  }
  .countdown-time {
    padding: 0px;
    justify-content: start;
    align-items: start;
  }

  .days,
  .hours,
  .minutes,
  .seconds {
    width: 50px;
  }

  #countdown {
    padding: 0px;
  }

  .donation-date {
    font-size: 16px;
    padding: 10px;
  }
}
</style>