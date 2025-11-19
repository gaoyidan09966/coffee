<template>
    <div class="productImages">
      <img src="../assets/images/1-1-coffee.jpg" alt=" tea banner">

    </div>
  </template>
  
  <script setup>
  import { ref,reactive} from 'vue'

  </script>
  
<style scoped>
.productImages {
    width: 100%; 
    overflow: hidden; 
}

.productImages img {
    width: 100%; 
    height: auto; 
    display: block; 
    object-fit: contain; 
}
  </style>