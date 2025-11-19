<template>
    <div class="banner">
      <swiper class="mySwiper" :modules="modules" :pagination="{ clickable: true }">
        <swiper-slide v-for="image in bannerImage" :key="image.id"><img :src="image.src" :alt="image.alt"></swiper-slide>
      </swiper>
      
    </div>
    
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Pagination } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  const modules = ref([Pagination]);
  const bannerImage=ref([
    { id: 1, src: new URL('../assets/images/swipe-1-1.jpg', import.meta.url).href, alt: '首页轮播图1'},
    { id: 2, src: new URL('../assets/images/swipe-1-2.jpg', import.meta.url).href, alt: '首页轮播图2'},
  ])
  </script>
<style scoped>
.banner {
  width: 100vw;
  height: 93.1vh;
  
}
.mySwiper {
  width: 100%;
  height: 100%;
}
.mySwiper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>