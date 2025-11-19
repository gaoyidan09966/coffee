<template>
  <div class="floatingContainer" @mouseenter="show = true" @mouseleave="show = false">  
    <img src="../assets/images/float.png" alt="联营合作" class="floatImage">
    <div v-if="show" class="QRcode">
      <img src="../assets/images/QRcode.png" alt="二维码" class="QRimage"></img>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>
<style scoped>
  .floatingContainer {
    position: fixed;
    right: 3px;
    bottom:60px;
    z-index: 1000;
    cursor: pointer;
  }
  .floatImage{
    width: 40px;
    transition:transform 0.5s ease;
  }
  .QRcode {
    position: absolute;
    right: 100%; /* 显示在悬浮图左侧 */
    margin-right: 10px; /* 给二维码和浮动图标之间留出一些间距 */
    bottom:-15px;
  }
  .QRimage{
    width: 160px;
    height: 220px;
  }

</style>