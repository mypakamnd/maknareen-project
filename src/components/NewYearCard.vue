<script setup>
import { ref } from "vue";

const message = ref("");
const isShow = ref(false);

function showMessage() {
  isShow.value = true;
}

function hideMessage() {
  isShow.value = false;
}
</script>

<template>
  <div id="q-app" class="contentApp" style="min-height: 100vh">
    <div>test show message</div>
    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="max-width: 300px">
        <q-input outlined v-model="message" :dense="dense"></q-input>
      </div>
    </div>
    <div>
      <q-btn
        style="margin-right: 10px"
        @click="showMessage"
        color="white"
        text-color="black"
        label="Show"
      ></q-btn>
      <q-btn
        @click="hideMessage"
        color="white"
        text-color="black"
        label="Hide"
      ></q-btn>
    </div>
    <span v-if="isShow">{{ message }}</span>
  </div>
</template>

<style scoped>
.contentApp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
