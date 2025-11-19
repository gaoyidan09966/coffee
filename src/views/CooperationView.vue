<template>
    <div class="common-layout">
      <el-container>
        <el-header>
          <HeaderNav></HeaderNav>
        </el-header>
        <el-main>
          <LianYing></LianYing>
        </el-main>
        <el-footer>
          <HomeFooter></HomeFooter>
          <FooterUsb></FooterUsb>
        </el-footer>
      </el-container>
    </div>
  </template>
  
  <script setup>
  import HeaderNav from '../components/HeaderNav.vue'
  import LianYing from '../components/LianYing.vue'
  import HomeFooter from '../components/HomeFooter.vue'
  import FooterUsb from '../components/FooterUsb.vue' 
  </script>
  
  <style scoped>
    .el-header {
      margin: 0;
      padding: 0;
    }
  </style>