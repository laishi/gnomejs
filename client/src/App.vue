<template>
  <div id="app">
    <v-header></v-header>
    <v-appbg></v-appbg>
    <v-sidebar></v-sidebar>
    <!--<v-sliderpage></v-sliderpage>-->
    <v-revealpage></v-revealpage>

    

    
    <!--<img src="./assets/logo.png">
    <v-hello></v-hello>-->
    
  </div>
</template>

<script>


import Header from '@/components/Header'
import Appbg from '@/components/Appbg'
import Sidebar from '@/components/Sidebar'
// import Sliderpage from '@/components/Sliderpage'
import Revealpage from '@/components/Revealpage'


export default {
  name: 'app',
  components:{
    'v-header': Header,
    'v-appbg': Appbg,
    'v-sidebar': Sidebar,
    // 'v-sliderpage': Sliderpage,
    'v-revealpage': Revealpage
  }
}
</script>

<style>

</style>
