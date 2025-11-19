<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderNav></HeaderNav>
      </el-header>
      <el-main>
        <JianLi></JianLi>
      </el-main>
      <el-footer>
        <FooterJian></FooterJian>
        
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import HeaderNav from '../components/HeaderNav.vue'
import JianLi from '../components/JianLi.vue'
</script>

<style scoped>
  .el-header {
    margin: 0;
    padding: 0;
  }
</style>