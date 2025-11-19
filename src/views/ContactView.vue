<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderNav />
      </el-header>
      <el-main>
        <ImageWe />
      </el-main>
      <el-footer >
        <LevitateBall></LevitateBall>
        <FooterUs />
        <FooterUsb />
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import HeaderNav from '../components/HeaderNav.vue'
import ImageWe from '../components/ImageWe.vue'
import FooterUs from '../components/FooterUs.vue';
import FooterUsb from '../components/FooterUsb.vue';
import LevitateBall from '../components/LevitateBall.vue'
</script>

<style scoped>
</style>