var fs = require('fs')
var mongoose = require('mongoose')
var appicon = require('../Mmodels/iconModel')




var dir = '/home/laishi/Work/DEV/gnome/gnomevue/client/static/icons/faenza/apps/'


var files = fs.readdirSync(dir)


for (var i in files) {


    var name = files[i].slice(0, -4)
    var fullName = files[i]
    var format = files[i].slice(files[i].length - 3, files[i].length)

    var appiconData = [
        new appicon({
            id: '0' + i,
            name: name,
            fullName: fullName,
            format: format,
        })
    ]

    appiconData[0].save(function(err, result) {})

    console.log('第 ' + i + ' 个图标数据储存完毕')
    if (i === files.length) {
        exit()
    }

}




function exit() {
    mongoose.disconnect()
}