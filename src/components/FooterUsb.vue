<template>
    <div class="container">
      <div class="footerLink" v-for="(item,index) in link" :key="index">
        <a href="#">{{ item }}</a>
        <span v-if="index < link.length - 1" class="separator">|</span>
      </div>
      <div class="containerB">
        <div class="copyRight">
            <p>© 2023 Cotti Coffee. All rights reserved.</p>
            <p>ICP备案:津ICP备2022007519号-1 库迪科技（天津）有限公司</p>
                <div class="contact-info">
                    <div class="contact-item">
                        <img src="../assets/images/beian.png" alt="" style="width: 18px;margin-right:234px;">
                        <span>津公网安备 12011602001270号</span>
                    </div>
                </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const link = ref([
    'Terms of Use',
    'Privacy Policy',
    '使用协议',
    '隐私政策'
  ]);
  </script>
  
  <style scoped>
  .container {
    width:100%;
    height: 93px;
    color: #F5F5F5;
    background-color: #282828;
    display: flex;
    justify-content: start;
    padding: 25px 245px;
    flex-wrap: wrap
  }
  .containerB{
    width:100%;
    margin: 0 ;
  }
  .copyRight {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #948c8c;
    padding: 5px;
  }
  .contact-item span{
    text-align: center;
    margin-left: -230px;
  }
  .footerLink {
    font-size: 12px;
  }
  .footerLink a {
    width: 100%;
    text-decoration: none;
    color: #F5F5F5;
  }
  .separator {
    margin-left: 18px; /* 控制分隔符与前一个链接的间距 */
    margin-right: 18px; /* 控制分隔符与后一个链接的间距，可以根据需要调整 */
    color: #948c8c; /* 确保分隔符颜色与文本一致 */
  }
  </style>