var mongoose = require('mongoose')
var user = require('../Mmodels/userModel')

var user = [

    new user({
        id: 001,
        name: 'laishi',
        password: '100100',
        introduce: '我是一个照明设计师',
        headPortrait: 'img/users/user.png',
        country: '中国'
    }),
    new user({
        id: 002,
        name: '如花',
        password: 'rh100100',
        introduce: '如花的脾气有点好哦！',
        headPortrait: 'img/users/user.png',
        country: '中国'
    }),
    new user({
        id: 003,
        name: '刘相宜',
        password: 'lxy100100',
        introduce: '刘相宜是一个学生',
        headPortrait: 'img/users/user.png',
        country: '中国'
    }),

]

var done = 0;

for (var i = 0; i < user.length; i++) {
    user[i].save(function(err, result) {
        done++
        if (done === user.length) {
            console.log('user save done')
            exit()
        }
    })

}

function exit() {
    mongoose.disconnect()
}