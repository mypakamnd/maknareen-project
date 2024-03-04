<template>
  <div>
    <div class="content" ref="htmlContent">
      <h2>Hello, World!</h2>
      <p>This is a sample HTML content.</p>
    </div>

    <button @click="convertHtmlToImage">Download Image</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const htmlContent = ref(null);

const convertHtmlToImage = () => {
  const content = htmlContent.value;
  const width = content.offsetWidth;
  const height = content.offsetHeight;

  // Create a canvas element
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  // Create an image element
  const img = new Image();

  // Create a data URL from HTML content
  const dataUrl =
    "data:image/svg+xml," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="' +
        width +
        '" height="' +
        height +
        '">' +
        '<foreignObject width="100%" height="100%">' +
        new XMLSerializer().serializeToString(content) +
        "</foreignObject>" +
        "</svg>"
    );

  // Set the source of the image to the data URL
  img.src = dataUrl;

  // Draw the image onto the canvas
  img.onload = () => {
    ctx.drawImage(img, 0, 0, width, height);

    // Create a link element to trigger download
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
};
</script>

<style scoped>
.content {
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin-bottom: 20px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
