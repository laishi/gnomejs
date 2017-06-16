<template>
    <div>  
    
        <div id="fullpage">




    
            <div class="section">   
    
                <div class="app-lists">
                    <div class="app-list" v-for="path in iconpath">
    
                        <div class="app-icon">    
                            <img v-bind:src="path.iconpath">    
                            <h3>name</h3>    
                        </div>
                    </div>    
                </div>   
    
            </div>  

    
            <div class="section">   
    
                <div class="app-lists">
                    <div class="app-list" v-for="path in iconpath">
    
                        <div class="app-icon">    
                            <img v-bind:src="path.iconpath">    
                            <h3>name</h3>    
                        </div>
                    </div>    
                </div>   
    
            </div>  

    
            <div class="section">   
    
                <div class="app-lists">
                    <div class="app-list" v-for="path in iconpath">
    
                        <div class="app-icon">    
                            <img v-bind:src="path.iconpath">    
                            <h3>name</h3>    
                        </div>
                    </div>    
                </div>   
    
            </div>  










    
        </div>

    </div>
</template>







<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .app-lists {
        position: relative;
        margin: 0 auto;
        width: 60vw;
        height: 80vh;
        /*margin-top: 10vh;*/
        /*background-color: blue;*/
        overflow: hidden;
        color: white;
    }
    
    .app-lists .app-list {
        position: relative;
        border-radius: 10px;
        float: left;
        width: 10vw;
        height: 20vh;
        /*background-color: rgba(0, 0, 0, 0.8);*/

        text-align: center;
        margin: 0 auto;

        opacity: 0;
    }
    
    .app-lists .app-list .app-icon {
        position: absolute;
        width: 64px;
        height: 64px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        /*background-color: blue;*/
    }
        
    .app-lists .app-list img {
        position: relative;
        width: 64px;
        height: 64px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    



</style>








<script>
    import Vue from 'vue'
    var iconpath = [{
            "iconpath": "/static/icons/faenza/apps/abiword.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/accessories-calculator.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/accessories-character-map.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/accessories-dictionary.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/accessories-text-editor.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/acroread.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/addressbook.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/adobe-air.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/amarok.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/amazon-mp3-store-source.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/amule.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/anjuta.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/application-default-icon.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/audacious.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/audacity.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/autoplus.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/autoten.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/avant-window-navigator.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/awn-settings.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/baobab.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/blender.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/bluefish.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/bluegriffon.svg"
        },
        {
            "iconpath": "/static/icons/faenza/apps/brasero.svg"
        }
    ]
    export default {
        data() {
            return {
                list: [],
                iconpath: iconpath
            }
        },
        mounted() {
            this.$http.jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?format=jsonp&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1492853417073', {
                jsonp: "jsonpCallback"
            }).then(res => {
                this.list = res.body.data.topList;
            })
    
        }
    }
</script>



