<template>
  <nav class="navbar">
    <div class="left">
      <img src="../assets/images/logo.png" alt="webLogo" style="height:40.39px;">
    </div>
    <div class="left">
      <ul class="menu">
        <li v-for="item in menuItem" :key="item.name">
          <a :href="item.path" @change="selectItem(item.path)">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref,reactive} from 'vue'
const menuItem = reactive([
  {name:'首页',path:'/'},
  {name:'关于Cotti',path:'/about'},
  {name:'联营合作',path:'/cooperation'},
  {name:'商业业态',path:'/business'},
  {name:'产品系列',path:'/products'},
  {name:'联系我们',path:'/contact'},
  {name:'找到我',path:'/internation'},
])
</script>
<style scoped>
  .navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#FFF;
    padding: 12px 236.014px;
    box-shadow: 0 2px 3px #dcdcdc;
    color: #0c192a;
    font-weight: 600;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000; 
  }
  .img{
    display: block;
  }
  .menu{
    display: flex;
    list-style: none;
  }
  .menu li{
    margin-right: 40px;
    
  }
  .menu li a{
    color: #555;
    text-decoration: none;
    position: relative;
    transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 16px;
  }
  .menu li a:hover{
    color: #9D2235;
  }
  .menu li a:hover::after {
  content: ''; /* 使用伪元素创建自定义下划线 */
  position: absolute;
  left: 0;
  bottom: -10px; /* 调整此值以控制下划线与文字的距离 */
  width: 100%;
  height: 2.5px; /* 下划线粗细 */
  background-color: #9D2235; /* 与悬浮颜色匹配 */
  transition: color 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>  