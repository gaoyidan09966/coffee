<template>
    <div class="businessImages">
      <img src="../assets/images/store-1.jpg" alt="">
      <img src="../assets/images/store-2.jpg" alt="">
    </div>
  </template>
  
  <script setup>
  import { ref,reactive} from 'vue'

  </script>
  
  <style scoped>
.businessImages {
    width: 100%; 
    overflow: hidden; 
}

.businessImages img {
    width: 100%; 
    height: auto; 
    display: block; 
    object-fit: contain; 
}
  </style>