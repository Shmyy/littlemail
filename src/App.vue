<template>
  <div id="app">
    <router-view></router-view>
    
    <maintarbar></maintarbar>
  </div>
</template>

<script>
  import Maintarbar from 'components/content/Maintarbar/Maintarbar'
  
  export default {
    name: 'App',
    components: {
      Maintarbar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
