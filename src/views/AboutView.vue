<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderNav></HeaderNav>
      </el-header>
      <el-main><imageAbout /></el-main>
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
import ImageAbout from '../components/imageAbout.vue'
import imageAbout from '../components/imageAbout.vue'
import HomeFooter from '../components/HomeFooter.vue'
import FooterUsb from '../components/FooterUsb.vue' 
import LevitateBall from '../components/LevitateBall.vue'
</script>

<style scoped>
  .el-header ,.el-main{
    margin: 0;
    padding: 0;
  }
</style>