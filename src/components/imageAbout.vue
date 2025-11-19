<template>
    <div class="aboutImages">
      <img src="../assets/images/introduce1.jpg" alt="">
      <img src="../assets/images/2-vision.jpg" alt="">
      <img src="../assets/images/4-story_1.jpg" alt="">
      <img src="../assets/images/5-story_2.jpg" alt="">
    </div>
  </template>
  
  <script setup>
  import { ref,reactive} from 'vue'

  </script>
  
  <style scoped>
  .aboutImages {
    width: 100%; /* 容器占满父元素宽度 */
    overflow: hidden; /* 禁用任何溢出滚动 */
}

.aboutImages img {
    width: 100%; /* 图片宽度适应容器 */
    height: auto; /* 保持图片比例 */
    display: block; /* 确保图片为块级元素 */
    object-fit: contain; /* 确保图片完整显示，不被裁剪 */
}
  </style>