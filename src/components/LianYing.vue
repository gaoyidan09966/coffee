<template>
    <div class="image-main">
        <img src="../assets/images/lianxi.jpg" alt="咖啡">
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
.image-main {
    width: 100%; /* 容器占满父元素宽度 */

    overflow: hidden; /* 禁用任何溢出滚动 */
}

.image-main img {
    width: 100%; /* 图片宽度适应容器 */
    height: auto; /* 保持图片比例 */
    display: block; /* 确保图片为块级元素 */
    object-fit: contain; /* 确保图片完整显示，不被裁剪 */
}
</style>