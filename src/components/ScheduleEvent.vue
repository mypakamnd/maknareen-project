<script setup>
import { db } from "../firebase/init.js";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
  where,
  doc,
  getDocs,
} from "firebase/firestore";
import { ref, onMounted } from "vue";
import {
  getStorage,
  uploadBytesResumable,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";

const q = query(collection(db, "schedule"), orderBy("date", "asc"));

const storage = getStorage();

const events = ref([]);
onMounted(async () => {
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot);
  querySnapshot.forEach(async (doc) => {
    console.log(doc.id, " => ", doc.data());
  });

  const meenEvents = [];
  for (const doc of querySnapshot.docs) {
    // console.log("event.data >>", doc.data());

    const imageRef = storageRef(storage, `${doc.data().eventImage}`);
    const url = await getDownloadURL(imageRef);
    const event = {
      id: doc.id,
      eventDate: doc.data().eventDate,
      eventDetail: doc.data().eventDetail,
      eventImage: url,
      eventLocation: doc.data().eventLocation,
      eventName: doc.data().eventName,
      date: doc.data().date,
    };

    meenEvents.push(event);
  }

  events.value = meenEvents;
  console.log("meenEvents >>", meenEvents);

  const event = await promise();
  console.log("event >>", event);
  events.value = event;
});
</script>

<template>
  <section id="schedule" class="event-schedule">
    <div class="schedule-card">
      <div class="schedule-title">Meen's Event Schedule</div>

      <div class="schedule-list">
        <div class="no-shedule" v-if="events.length === 0">
          <span>ไม่มี Event ในเร็ว ๆ นี้ ...</span>
        </div>
        <div class="have-event" v-else>
          <div class="schedule" v-for="event in events" :key="event">
            <img class="img-cover-event" :src="event.eventImage" alt="" />
            <div class="detail">
              <div class="title-group">
                <div class="event-name-and-btn">
                  <div class="event-title">{{ event.eventName }}</div>
                  <div class="btn-group-detail">
                    <a
                      :href="event.eventDetail"
                      target="_blank"
                      class="btn-detail"
                      >DETAIL</a
                    >
                  </div>
                </div>
                <div class="date-and-location">
                  <div class="event-date">
                    <div class="icon">
                      <box-icon
                        type="solid"
                        name="calendar-event"
                        size="sm"
                        color="#044560"
                      ></box-icon>
                    </div>
                    <div class="date-txt">{{ event.eventDate }}</div>
                  </div>
                  <div class="location">
                    <div class="icon">
                      <box-icon
                        name="map"
                        type="solid"
                        size="sm"
                        color="#044560"
                      ></box-icon>
                    </div>
                    <div class="location-txt">
                      {{ event.eventLocation }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Desktop size */
@media only screen and (min-width: 1024px) {
  a:link {
    text-decoration-line: none;
  }

  a:link:hover {
    text-decoration-line: none;
  }
  .event-schedule {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }
  .event-name-and-btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 340px;
  }

  .date-and-location {
    padding-top: 10px;
    padding-right: 10px;
  }
  .schedule-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }

  .schedule-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0px 0px 100px 0px;
  }

  .have-event {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .no-shedule {
    padding: 150px 0px 250px 0px;
  }

  span {
    color: #044560;
    opacity: 70%;
    font-family: "IBM Plex Sans Thai";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }

  .schedule-title {
    margin-bottom: 40px;
    margin-top: 100px;
    flex-shrink: 0;
    color: #044560;
    font-family: Quicksand;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .schedule {
    width: 350px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 10px 10px 10px;
    height: 520px;
  }
  .schedule:hover {
    box-shadow: #cde2eb 0px 8px 24px;
  }
  .img-cover-event {
    width: 350px;
    height: 350px;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
  }

  .detail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 350px;
    padding: 20px 5px 20px 5px;
  }

  .event-date {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .location {
    display: flex;
    flex-direction: row;
    align-items: start;
  }

  .event-title {
    color: #044560;
    font-family: "IBM Plex Sans Thai";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    padding: 0px 0px 0px 10px;
    display: flex;
    align-items: center;
    padding-right: 10px;
  }

  .date-txt,
  .location-txt {
    color: #044560;
    font-family: "IBM Plex Sans Thai";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
  }
  .icon {
    margin-right: 5px;
    margin-left: 10px;
  }

  .btn-group-detail {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin: 0px 10px 0px 0px;
  }

  .btn-detail {
    background-color: transparent;
    color: #044560;
    border: 1px solid #044560;
    padding: 5px 17px;
    font-size: 14px;
    line-height: 1.715em;
    cursor: pointer;
    border-radius: 3px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .btn-detail:hover {
    background-color: #044560;
    color: #fff;
  }
}
/* Ipad size */
@media only screen and (max-width: 1024px) {
  a:link {
    text-decoration-line: none;
  }

  a:link:hover {
    text-decoration-line: none;
  }
  .event-schedule {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }
  .event-name-and-btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 340px;
  }

  .date-and-location {
    padding-top: 10px;
    padding-right: 10px;
  }
  .schedule-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
    background-color: #ffffff;
  }

  .schedule-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0px 0px 100px 0px;
  }

  .have-event {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .have-event {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .no-shedule {
    padding: 150px 0px 250px 0px;
  }

  span {
    color: #044560;
    opacity: 70%;
    font-family: "IBM Plex Sans Thai";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }

  .schedule-title {
    margin-bottom: 40px;
    margin-top: 0px;
    flex-shrink: 0;
    color: #044560;
    font-family: Quicksand;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .schedule {
    width: 350px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 10px 10px 10px;
    height: 520px;
  }
  .schedule:hover {
    box-shadow: #cde2eb 0px 8px 24px;
  }
  .img-cover-event {
    width: 350px;
    height: 350px;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
  }

  .detail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 350px;
    padding: 20px 5px 20px 5px;
  }

  .event-date {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .location {
    display: flex;
    flex-direction: row;
    align-items: start;
  }

  .event-title {
    color: #044560;
    font-family: "IBM Plex Sans Thai";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    padding: 0px 0px 0px 10px;
    display: flex;
    align-items: center;
    padding-right: 10px;
  }

  .date-txt,
  .location-txt {
    color: #044560;
    font-family: "IBM Plex Sans Thai";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
  }
  .icon {
    margin-right: 5px;
    margin-left: 10px;
  }

  .btn-group-detail {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin: 0px 10px 0px 0px;
  }

  .btn-detail {
    color: #044560;
    font-family: Quicksand;
    font-weight: 700;
    padding: 0px 20px 0px 20px;
  }

  .btn-detail {
    background-color: transparent;
    color: #044560;
    border: 1px solid #044560;
    padding: 5px 17px;
    font-size: 14px;
    line-height: 1.715em;
    cursor: pointer;
    border-radius: 3px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .btn-detail:hover {
    background-color: #044560;
    color: #fff;
  }
}
/* mobile size */
@media only screen and (max-width: 480px) {
  a:link {
    text-decoration-line: none;
  }

  a:link:hover {
    text-decoration-line: none;
  }
  .event-schedule {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }
  .event-name-and-btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 290px;
  }

  .date-and-location {
    padding-top: 10px;
    padding-right: 10px;
  }
  .schedule-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 0px;
    background-color: #ffffff;
  }

  .schedule-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0px 0px 100px 0px;
  }

  .have-event {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .have-event {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .no-shedule {
    padding: 150px 0px 250px 0px;
  }

  span {
    color: #044560;
    opacity: 70%;
    font-family: "IBM Plex Sans Thai";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }

  .schedule-title {
    margin-bottom: 30px;
    margin-top: 100px;
    flex-shrink: 0;
    color: #044560;
    font-family: Quicksand;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .schedule {
    width: 300px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 10px 20px 10px;
    height: auto;
  }
  .img-cover-event {
    width: 300px;
    height: 300px;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
  }

  .detail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 300px;
    padding: 20px 5px 20px 5px;
  }

  .event-date {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .location {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .event-title {
    color: #044560;
    font-family: "IBM Plex Sans Thai";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    padding: 0px 0px 0px 10px;
    display: flex;
    align-items: center;
    padding-right: 10px;
  }

  .date-txt,
  .location-txt {
    color: #044560;
    font-family: "IBM Plex Sans Thai";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
  }
  .icon {
    margin-right: 5px;
    margin-left: 10px;
  }

  .btn-group-detail {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin: 0px 10px 0px 0px;
  }
  .btn-detail {
    background-color: transparent;
    color: #044560;
    border: 1px solid #044560;
    padding: 5px 17px;
    font-size: 12px;
    line-height: 1.715em;
    cursor: pointer;
    border-radius: 3px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .btn-detail:hover {
    background-color: #044560;
    color: #fff;
  }
}
</style>
