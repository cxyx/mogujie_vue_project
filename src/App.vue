<template>
  <!--  <HelloWorld msg="Hello Vue 3 + Vite" />-->
  <!--  <Home/>-->
<!--  <About/>-->
  <!--  <Layout/>-->
  <router-view/>
</template>

<script setup>
// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import Layout from './views/layout.vue'

import {onMounted} from 'vue'
// 全局加载属性
onMounted(() => {
  window.document.documentElement.setAttribute(
      "data-theme",
      "warm"
  )
})
</script>