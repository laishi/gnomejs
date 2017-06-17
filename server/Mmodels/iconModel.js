var mongoose = require('mongoose')
mongoose.connect('localhost:8080/gnomeDB')


var Schema = mongoose.Schema

var iconSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    fullName: { type: String, required: true },
    format: String,
}, { collection: 'appiconCOL' })

var appicon = mongoose.model('appicon', iconSchema)

module.exports = appicon