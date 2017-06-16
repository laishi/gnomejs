<template>
    <div>
    
        <div class="reveal">
            <div class="slides">
    
    
    
                <section v-for="i in 4">
                    <!--<input type="range" v-model="limitStart">-->
                    <!--<input type="range" v-model="limitEnd">-->
    
                    <div class="app-lists">
                        <div class="app-list" v-for="iconapp in applimit">
    
                            <div class="app-icon">
                                <img :src="basepath + iconapp.fullName">
                                <div class="app-name">
                                    <h3>{{iconapp.name}}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    
    
            </div>
        </div>
    
    </div>
</template>














<script>
    import Vue from 'vue'
    
    
    var iconpath = [{
            "_id": "593e6a7c04c2fc7e5753657d",
            "id": "00",
            "name": "Thunar",
            "fullName": "Thunar.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e5753657e",
            "id": "01",
            "name": "WorldOfGoo",
            "fullName": "WorldOfGoo.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536580",
            "id": "03",
            "name": "abiword",
            "fullName": "abiword.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e5753657f",
            "id": "02",
            "name": "Wunderlist",
            "fullName": "Wunderlist.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536583",
            "id": "06",
            "name": "accessories-dictionary",
            "fullName": "accessories-dictionary.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536582",
            "id": "05",
            "name": "accessories-character-map",
            "fullName": "accessories-character-map.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536581",
            "id": "04",
            "name": "accessories-calculator",
            "fullName": "accessories-calculator.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536587",
            "id": "010",
            "name": "adobe-air",
            "fullName": "adobe-air.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536586",
            "id": "09",
            "name": "addressbook",
            "fullName": "addressbook.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536585",
            "id": "08",
            "name": "acroread",
            "fullName": "acroread.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536584",
            "id": "07",
            "name": "accessories-text-editor",
            "fullName": "accessories-text-editor.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536588",
            "id": "011",
            "name": "amarok",
            "fullName": "amarok.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e5753658d",
            "id": "016",
            "name": "audacious",
            "fullName": "audacious.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e5753658c",
            "id": "015",
            "name": "application-default-icon",
            "fullName": "application-default-icon.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e5753658a",
            "id": "013",
            "name": "amule",
            "fullName": "amule.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536589",
            "id": "012",
            "name": "amazon-mp3-store-source",
            "fullName": "amazon-mp3-store-source.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e5753658b",
            "id": "014",
            "name": "anjuta",
            "fullName": "anjuta.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536590",
            "id": "019",
            "name": "autoten",
            "fullName": "autoten.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e5753658e",
            "id": "017",
            "name": "audacity",
            "fullName": "audacity.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536593",
            "id": "022",
            "name": "baobab",
            "fullName": "baobab.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e5753658f",
            "id": "018",
            "name": "autoplus",
            "fullName": "autoplus.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536594",
            "id": "023",
            "name": "blender",
            "fullName": "blender.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536591",
            "id": "020",
            "name": "avant-window-navigator",
            "fullName": "avant-window-navigator.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536592",
            "id": "021",
            "name": "awn-settings",
            "fullName": "awn-settings.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536598",
            "id": "027",
            "name": "bug-buddy",
            "fullName": "bug-buddy.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536599",
            "id": "028",
            "name": "caffeine",
            "fullName": "caffeine.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536595",
            "id": "024",
            "name": "bluefish",
            "fullName": "bluefish.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e5753659a",
            "id": "029",
            "name": "ccc_large",
            "fullName": "ccc_large.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e5753659e",
            "id": "033",
            "name": "chromium-browser",
            "fullName": "chromium-browser.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536597",
            "id": "026",
            "name": "brasero",
            "fullName": "brasero.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e5753659c",
            "id": "031",
            "name": "checkbox",
            "fullName": "checkbox.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e575365a1",
            "id": "036",
            "name": "clementine2",
            "fullName": "clementine2.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e57536596",
            "id": "025",
            "name": "bluegriffon",
            "fullName": "bluegriffon.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e5753659b",
            "id": "030",
            "name": "ccsm",
            "fullName": "ccsm.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e575365a0",
            "id": "035",
            "name": "clementine",
            "fullName": "clementine.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e575365a3",
            "id": "038",
            "name": "comix",
            "fullName": "comix.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e5753659f",
            "id": "034",
            "name": "chromium-browser2",
            "fullName": "chromium-browser2.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e5753659d",
            "id": "032",
            "name": "cheese",
            "fullName": "cheese.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e575365a2",
            "id": "037",
            "name": "clock",
            "fullName": "clock.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e575365a4",
            "id": "039",
            "name": "computerjanitor",
            "fullName": "computerjanitor.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e575365a5",
            "id": "040",
            "name": "config-users",
            "fullName": "config-users.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e575365a6",
            "id": "041",
            "name": "credentials-preferences",
            "fullName": "credentials-preferences.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e575365ab",
            "id": "046",
            "name": "deluge",
            "fullName": "deluge.svg",
            "format": "svg",
            "__v": 0
        },
        {
            "_id": "593e6a7c04c2fc7e575365a7",
            "id": "042",
            "name": "dc++",
            "fullName": "dc++.svg",
            "format": "svg",
            "__v": 0
        }
    ]
    
    
    
    
    
    import {
        eventHub
    } from '../main'
    
    
    export default {
    
    
        data() {
            return {
                list: [],
                basepath: '/static/icons/faenza/apps/',
                names: [],
                fullnames: [],
                iconapps: iconpath,
                limitStart: 0,
                limitEnd: 24,
                headerKeywords: '',
    
                pageicons: 24
    
                // pages: 1,
    
            }
        },
    
    
    
        computed: {
    
            pages: function() {
    
                return Math.ceil(this.iconapps.length / this.pageicons / 4)
                // return pagesLength
                // return this.iconapps.length / this.pageicons
            },
    
    
    
            applimit: function() {
    
                console.log('this.iconapps.length' + this.iconapps.length)
    
                if (this.headerKeywords.length < 1) {
    
                    if (this.limitEnd - 24 < 24) {
                        this.limitEnd = 24
                    }
                    if (this.limitStart > this.limitEnd - 24) {
                        this.limitStart = this.limitEnd - 24
                    }
                    return this.iconapps.slice(this.limitStart, this.limitEnd)
                } else {
    
                    var self = this
                    return self.iconapps.filter(function(searchapp) {
                        return searchapp.name.indexOf(self.headerKeywords) !== -1
                    })
                }
            }
        },
    
    
        methods: {
            addTodo: function(newTodo) {
                this.headerKeywords.push(newTodo)
            }
        },
    
    
        mounted() {
    
            eventHub.$on('add-todo', function(keyword) {
                this.headerKeywords = keyword;
            }.bind(this))
    
    
    
            this.$http.get('http://localhost:3000/assets/appicon').then(response => {
                // get body data
                this.iconapps = response.body;
    
                for (var i = 0; i < this.iconapps.length; i++) {
                    this.names.push(this.iconapps[i].name)
                    this.fullnames.push(this.iconapps[i].fullname)
                }
    
                console.log('this.iconapps.length' + this.iconapps.length)
    
    
            }, response => {
                // error callback
            });
        }
    
    
    
    
    
    
    
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .reveal {
        position: absolute;
    }
    
    .reveal {
        overflow: hidden;
        /*background-color: blue;*/
    }
    
    .app-lists {
        position: relative;
        margin: 0 auto;
        width: 60vw;
        height: 80vh;
        /*margin-top: 10vh;*/
        /*background-color: blue;*/
        /*overflow: hidden;*/
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
        opacity: 1;
    }
    
    .app-lists .app-list .app-icon {
        position: absolute;
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
    
    .app-lists .app-list .app-name {
        width: 80%;
        height: 32px;
        text-align: center;
        overflow: hidden;
        margin: 0 auto;
    }
</style>

