<template>
    <div class="headers">
        <header>
            <div class="nav">
                <ul class="nav-title">
    
    
                    <li class="activitles">
                        <div class="activitles-item showWin">
                            <h3>Activitles</h3>
                        </div>
                        <div class="activitles-item">
                            <h3><i class="material-icons">face</i></h3>
                        </div>
                    </li>
    
    
                    <li class="funInfo">
    
                        <div class="date">
                            <h3>Thu 22:57</h3>
                        </div>
    
    
                        <ul class="funItems">

                            <li class="funItem searchbox">
                                <input v-model = "keywords" type="text" placeholder="Search" />
                            </li>


                            <li class="funItem searchicon">
                                <p> <i class="material-icons">search</i> </p>
                            </li>
                            <li class="funItem">
                                <p> <i class="material-icons">update</i> </p>
                            </li>
                            <li class="funItem">
                                <p> <i class="material-icons">favorite</i> </p>
                            </li>
    
                            <li class="funItem">
                                <p> <i class="material-icons">group_work</i> </p>
                            </li>
                            <li class="funItem">
                                <p> <i class="material-icons">sort</i> </p>
                                <!--<i class="material-icons">face</i>-->
                            </li>
                        </ul>
    
                    </li>
    
    
                    <li class="apps">
                        <div class="app-show showApp">
                            <h3>Apps</h3>
                        </div>
                        <div class="app-show">
                            <h3></h3>
                        </div>
                    </li>
    
    
    
    
    
    
    
                </ul>
    
                <ul class="cornner">
                    <li class="cor-l"> <img src="/static/icons/cornner/cor-l.svg" alt=""></li>
                    <li class="cor-r"> <img src="/static/icons/cornner/cor-r.svg" alt=""></li>
                </ul>
    
    
            </div>
        </header>
    
    
    
    
    
    </div>
</template>

<script>

    import {eventHub} from '../main'

    export default {
        name: 'header',
        data() {
            return {
                keywords: 'search',
                msg: 'Header is here'
            }
        },


        watch: {
            keywords: function (val, oldVal) {
                console.log('new: %s, old: %s', val, oldVal)

                if (val !=oldVal) {
                    eventHub.$emit('add-todo', this.keywords)
                }

            }
        },



        methods: {

        }
    }
    // console.log('yes it is')
</script>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .nav {
        position: absolute;
        width: 100%;
        height: 32px;
        background-color: black;
        z-index: 1000;
    }
    
    .nav .cornner {
        position: relative;
        width: 100%;
        height: 12px;
        margin-top: 32px;
    }    
    .nav .cornner li {
        position: absolute;
        float: left;
        height: 12px;
        width: 12px;
        padding: 0;
        margin: 0;
    }
    .nav .cornner img {
        position: relative;
        height: 12px;
        width: 12px;
        padding: 0;
        margin: 0;
    }

    .nav .cornner .cor-r {
        right: 0;
    }
    
     
    .nav h3 {
        font-size: 14px;
        color: white;
        text-align: center;
        line-height: 32px;
    }
    

    
    .nav .nav-title li {
        float: left;
        margin: 0 auto;
    }
    
    .nav .nav-title li:hover {
        cursor: default;
    }
    
    .nav .nav-title .activitles {
        width: 25%;
    }
    
    .nav .nav-title .activitles-item {
        float: left;
        margin: 0 1em;
    }
    
    .nav .nav-title .app-show {
        float: right;
        /*margin: 0 0.2em;*/
        padding-right: 10px;
    }
    
    .nav .nav-title .curapp {
        margin-left: 32px;
    }
    
    .nav .nav-title .funInfo {
        width: 50%;
        /*background-color: burlywood;*/
    }
    
    .funInfo p {
        color: white;
        text-align: center;
    }       
    .funInfo .searchbox {
        width: 0;
        display: block;
    }     
    .funInfo input {
        width: 100%;
        height: 28px;
        margin-top: 2px;
        background-color: rgba(255, 255, 255, 0.2);
        border: none;
        outline:none;
        color: white;
        font-size: 14px;
        /*padding-left: 18px;*/
    }      
 
    .funInfo i {
        line-height: 32px;
        font-size: 18px;
        color: white;
        text-align: center;
    }
    
    .funInfo .date {
        width: 100%;
        height: 32px;
        display: block;
    }
    
    .funInfo .funItems {
        width: 100%;
        height: 32px;
        display: none;
        margin: 0 auto;
        overflow: hidden;
        /*background-color: blue;*/
    }
    
    .funInfo .funItems .funItem {
        position: relative;
        float: left;
        width: 25%;
        height: 32px;
        background-color: rgba(0, 0, 0, 0.8);
        cursor: default;
    }
    
    .funInfo .funItems .funItem:first-child {
        border-radius: 16px 0 0 16px;
    }
    
    .funInfo .funItems .funItem:last-child {
        border-radius: 0 16px 16px 0;
    }
    
    .nav .nav-title .apps {
        width: 25%;
        text-align: right;
    }
    
    .app-items {
        position: absolute;
        width: 5vw;
        height: 80vh;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 0 1em 1em 0;
        margin: auto;
        top: 0;
        bottom: 0;
        /*left: -5vw;*/
        z-index: 1;
    }
</style>
