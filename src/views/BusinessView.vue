<template>
    <div class="common-layout">
      <el-container>
        <el-header>
          <HeaderNav></HeaderNav>
        </el-header>
        <el-main>
          <businessCooperation></businessCooperation>
          <SwiperBanner2></SwiperBanner2> 
        </el-main>
        <el-footer>
          <LevitateBall></LevitateBall>
          <HomeFooter></HomeFooter> 
          <FooterUsb></FooterUsb>
        </el-footer>
      </el-container>
    </div>
  </template>
  
  <script setup>
  import HeaderNav from '../components/HeaderNav.vue'
  import HomeFooter from '../components/HomeFooter.vue'
  import businessCooperation from '../components/businessCooperation.vue';
  import SwiperBanner2 from '../components/SwiperBanner2.vue'
  import FooterUsb from '../components/FooterUsb.vue' 
  import LevitateBall from '../components/LevitateBall.vue'
  </script>
