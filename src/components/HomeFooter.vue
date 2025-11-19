<template>
    <div class="container">
      <div class="content">
        <div class="footerLeft">
          <img src="../assets/images/logotming.png" alt="" class="logo" />
          <h4>联系 Cotti</h4>
          <div class="phone" v-for="(item, index) in left" :key="index">
            <img :src="item.icon" alt="" />
            <div class="textLeft">
              <span>{{ item.name }}</span>
              <span class="textValue">{{ item.value }}</span>
            </div>
          </div>
        </div>
  
        <div class="footerCenter">
          <div class="media" v-for="(item, index) in media" :key="index">
            <img :src="item.icon" alt="" />
            <div class="textLeft">
              <span>{{ item.name }}</span>
              <span class="textValue">{{ item.value }}</span>
            </div>
          </div>
        </div>
  
        <div class="footerRight">
          <h4>关注 Cotti</h4>
          <div class="contentRight">
            <div
              class="weXin"
              v-for="(item, index) in right"
              :key="index"
              @mouseenter="showQrCode(item.qrCode)"
              @mouseleave="hideQrCode"
            >
              <img :src="item.icon" alt="" />
              <div class="textRight">
                <span>{{ item.name }}</span>
              </div>
              <div v-if="currentQrCode === item.qrCode" class="qr-code-popup">
                <img :src="currentQrCode" alt="二维码" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  import phoneIcon from '../assets/images/phone.svg'
  import weIcon from '../assets/images/we.svg'
  import propertyIcon from '../assets/images/property.svg'
  import mediaIcon from '../assets/images/media.svg'
  import cooperationIcon from '../assets/images/cooperation.svg'
  import addressIcon from '../assets/images/address.svg'
  import wxIcon from '../assets/images/wx.svg'
  import messageIcon from '../assets/images/message (1).svg'
  import microBlogIcon from '../assets/images/micro-blog.svg'
  import tiktokIcon from '../assets/images/tiktok_1.svg'
  import linkIcon from '../assets/images/link.svg'
  import wxPng from '../assets/images/wx.png'
  
  const left = reactive([
    { name: '热线电话', value: '400-888-1717', icon: phoneIcon },
    { name: '招贤纳士', value: 'HR@COTTICOFFEE.COM', icon: weIcon },
    { name: '物业合作', value: 'BD_Store@COTTICOFFEE.COM', icon: propertyIcon }
  ])
  
  const media = reactive([
    { name: '市场合作', value: 'MKT@COTTICOFFEE.COM', icon: mediaIcon },
    { name: '供应商合作', value: 'SC@COTTICOFFEE.COM', icon: cooperationIcon },
    { name: '总部地址', value: '北京市朝阳区望京中环南路甲2号佳境天城B座2层', icon: addressIcon }
  ])
  
  const right = reactive([
    { name: '公众号', value: 'MKT@COTTICOFFEE.COM', icon: wxIcon, qrCode: wxPng },
    { name: '视频号', value: 'SC@COTTICOFFEE.COM', icon: messageIcon, qrCode: wxPng },
    { name: '微博', value: '北京市朝阳区望京中环南路甲2号佳境天城B座2层', icon: microBlogIcon, qrCode: wxPng },
    { name: '抖音', value: 'MKT@COTTICOFFEE.COM', icon: tiktokIcon, qrCode: wxPng },
    { name: '小程序', value: 'SC@COTTICOFFEE.COM', icon: linkIcon, qrCode: wxPng }
  ])
  
  const currentQrCode = ref(null)
  
  const showQrCode = (qrCodePath) => {
    currentQrCode.value = qrCodePath
  }
  
  const hideQrCode = () => {
    currentQrCode.value = null
  }
  </script>
  
  <style scoped>
  .container {
    width: 100%;
    height: 300px;
    background-color: #282828;
    color: #f5f5f5;
  }
  
  .logo {
    width: 28%;
    margin-top: 28px;
    margin-bottom: 15px;
  }
  
  .content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  
  .footerLeft h4 {
    margin-top: 20px;
    font-size: 16px;
  }
  
  .textLeft {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    color: #909090;
    font-size: 10px;
  }
  
  .textValue {
    color: #f5f5f5;
    font-size: 13px;
  }
  
  .phone {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 20px;
  }
  
  .footerCenter {
    margin-top: 115px;
    margin-left: -600px;
  }
  
  .media {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 20px;
  }
  
  .footerRight {
    margin-top: 20px;
  }
  
  .footerRight h4 {
    margin-left: 108px;
  }
  
  .contentRight {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 20px;
    margin-left: 100px;
  }
  
  .weXin {
    position: relative;
    cursor: pointer;
    margin: 0 14px;
    font-size: 12px;
  }
  
  .weXin img {
    width: 30px;
  }
  
  .qr-code-popup {
    position: absolute;
    bottom: 110%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .qr-code-popup img {
    width: 50px;
    height: auto;
  }
  
  hr {
    width: 74%;
    margin-left: 10%;
    margin-top: 18px;
    border: none;
    border-top: 2px solid #979797;
  }
  </style>
  