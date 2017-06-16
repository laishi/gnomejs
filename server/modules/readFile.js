var fs = require('fs')




var readFiles = function(dir) {

    var files = fs.readdirSync(dir)




    var namejson = [{ name: 'jpg' }, { name: 'png' }]

    // for (var i in files) {

    //     namejson.push('{name: ' + files[i] + '}')

    // }


    // JSON.stringify(namejson);



    return namejson
}

module.exports = readFiles