<template>
    <div class="container">
      <div class="container-left">
        <h4>{{ nameA }}</h4>
        <p v-for="(item,index) in addressA" :key="'addressA-' + index" >{{ item }}</p>
        <div class="contact-info">
          <div v-for="(item,index) in addressC" :key="'addressC-' + index">
              <img src="../assets/images/message.svg" alt="" style="width: 20px;">
              <span>{{ item }}</span>
          </div>
        </div>
      </div>
      <div class="container-right">
        <h4>{{ nameB }}</h4>
        <p v-for="(item,index) in addressB" :key="'addressB-' + index" >{{ item }}</p>
        <div class="contact-info">
          <div v-for="(item,index) in addressD" :key="'addressD-' + index">
              <img src="../assets/images/message.svg" alt="" style="width: 18px;">
              <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
 </template>
  
  <script setup>
    import { ref, reactive } from 'vue'
  const nameA = ref('总部')
  const addressA = ref([
      '地址：北京市朝阳区望京中环南路甲2号佳境天城B座2层',
      '邮编：100102',
      '电话：400-888-1717'
      ])
  const nameB = ref('运营中心')
  const addressB = ref([
      '地址：天津空港经济区环河北路80号空港商务园E2栋',
      '邮编：300308',
      '电话：400-888-1717'
      ])
  const addressC = ref([
      '供应商合作：SC@COTTICOFFEE.COM',
      '市 场 合 作：MKT@COTTICOFFEE.COM'
  ])
  const addressD = ref([
      '招贤纳士：HR@COTTICOFFEE.COM',
      '物业合作：BD_Store@COTTICOFFEE.COM'
  ])
  </script>
  <style scoped>
      .container{
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 180px; /* 调整间距以适应合并后的布局 */
          margin-bottom: 250px;
      }
      h4{
          margin-top: 20px;
      }
      .container-left p, .container-right p {
          font-size: 12px; 
          line-height: 1.5;
          color: #8b8282;
          margin-top: 5px; 
      }
  
      .contact-info { 
          margin-top: 20px; 
      }
  
      .contact-info div {
          display: flex;
          align-items: center;
          gap: 5px; 
          margin-bottom: 10px;
          font-size: 11px; 
          color: #8b8282;
      }
  </style>