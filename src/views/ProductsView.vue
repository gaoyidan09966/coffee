<template>
    <div class="common-layout">
      <el-container>
        <el-header>
          <HeaderNav></HeaderNav>
        </el-header>
        <el-main>
          <ProductImage></ProductImage>
          <SwiperBanner3></SwiperBanner3>
          <ProductImage2></ProductImage2>
        </el-main>
        <el-footer>
          <HomeFooter></HomeFooter>
          <FooterUsb></FooterUsb>
          <LevitateBall></LevitateBall>
        </el-footer>
      </el-container>
    </div>
  </template>
  
  <script setup>
  import HeaderNav from '../components/HeaderNav.vue'
  import HomeFooter from '../components/HomeFooter.vue'
  import ProductImage from '../components/ProductImage.vue';
  import SwiperBanner3 from '../components/SwiperBanner3.vue';
  import ProductImage2  from '../components/ProductImage2.vue';
  import FooterUsb from '../components/FooterUsb.vue' 
  import LevitateBall from '../components/LevitateBall.vue'
  </script>
  
  <style scoped>
    .el-header {
      margin: 0;
      padding: 0;
    }
  </style>