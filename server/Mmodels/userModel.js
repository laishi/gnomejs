var mongoose = require('mongoose')
mongoose.connect('localhost:8080/shoppingDB')


var Schema = mongoose.Schema

var userSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    introduce: { type: String, required: true },
    headPortrait: String,
    country: String
}, { collection: 'userCOL' })

var user = mongoose.model('user', userSchema)

module.exports = user