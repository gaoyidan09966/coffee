<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderNav></HeaderNav>
      </el-header>

      <el-main>
        <SwiperBanner></SwiperBanner>
        <ImageMain></ImageMain>
      </el-main>

      <el-footer>
        <LevitateBall></LevitateBall>
        <HomeFooter></HomeFooter>
        <FooterUsb></FooterUsb>
      </el-footer>
    </el-container>

    <AnnouncementModal :visible="showAnnouncement" @close="handleCloseAnnouncement" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue' // 引入 ref 和 onMounted

// 导入你的其他组件
import HeaderNav from '../components/HeaderNav.vue'
import SwiperBanner from '../components/SwiperBanner.vue'
import ImageMain from '../components/ImageMain.vue'
import HomeFooter from '../components/HomeFooter.vue'
import FooterUsb from '../components/FooterUsb.vue'
import LevitateBall from '../components/LevitateBall.vue'

// 导入公告弹窗组件
import AnnouncementModal from '../components/AnnouncementModal.vue' // 确保路径正确

// 定义一个响应式变量来控制弹窗的显示/隐藏
const showAnnouncement = ref(false)

// 组件挂载后执行的逻辑
onMounted(() => {
  // 检查是否已经看过公告
  const hasSeenAnnouncement = localStorage.getItem('hasSeenAnnouncement')
  if (!hasSeenAnnouncement) {
    showAnnouncement.value = true // 如果没看过，则显示弹窗
  }
})

// 处理弹窗关闭事件的函数
const handleCloseAnnouncement = () => {
  showAnnouncement.value = false // 隐藏弹窗
  // 设置本地存储，表示用户已经看过公告
  localStorage.setItem('hasSeenAnnouncement', 'true')
}
</script>

<style scoped>
/* 如果有首页特有的样式，可以放在这里 */
</style>