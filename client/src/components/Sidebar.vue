<template>
  <div>
  
  
    <div class="app-items">
      <ul class="app-bar">
        <li class="app-item showList"> <img src="/static/icons/apps/64/application-default-icon.svg"> </li>
        <li class="app-item"> <img src="/static/icons/apps/64/accessories-calculator.svg"> </li>
        <li class="app-item"> <img src="/static/icons/apps/64/accessories-camera.svg"> </li>
        <li class="app-item"> <img src="/static/icons/apps/64/accessories-dictionary.svg"> </li>
        <li class="app-item"> <img src="/static/icons/apps/64/applets-screenshooter.svg"> </li>
        <li class="app-item"> <img src="/static/icons/apps/64/apport.svg"> </li>
        <li class="app-item"> <img src="/static/icons/apps/64/empathy.svg"> </li>
        <li class="app-item"> <img src="/static/icons/apps/64/evince.svg"> </li>
  
      </ul>
  
    </div>
  
    <div class="win-bar">
  
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sidebar',
    data() {
      return {
        msg: 'sidebar show now'
      }
    },
    mounted() {

      console.log(this.msg)
    }
  }
</script>






<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .app-items {
    position: absolute;
    width: 5vw;
    height: 80vh;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 0 1em 1em 0;
    margin: auto;
    top: 0;
    bottom: 0;
    left: -5vw;
    z-index: 10;
  }
  
  .app-bar {
    position: relative;
    height: 100%;
    /*background-color: cyan;*/
    margin: auto;
    top: 0;
    bottom: 0;
    border-radius: 0 1em 1em 0;
    overflow: hidden;
  }
  
  .app-bar .app-item {
    width: 5vw;
    height: 10vh;
    /*background-color: blueviolet;*/
    border-radius: 1em;
    overflow: hidden;
    text-align: center;
  }
  
  .app-bar .app-item img {
    position: absolute;
    height: 6vh;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  
  .win-bar {
    position: absolute;
    width: 200px;
    height: 80vh;
    background-color: rgba(0, 0, 0, 0.8);
    margin: auto;
    right: -200px;
    top: 0;
    bottom: 0;
    border-radius: 1em 0 0 1em;
    z-index: 10;
  }
</style>
