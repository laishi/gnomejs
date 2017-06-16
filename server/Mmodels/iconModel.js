var mongoose = require('mongoose')
mongoose.connect('120.76.47.201:3029/gnomeDB')


var Schema = mongoose.Schema

var iconSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    fullName: { type: String, required: true },
    format: String,
}, { collection: 'appiconCOL' })

var appicon = mongoose.model('appicon', iconSchema)

module.exports = appicon