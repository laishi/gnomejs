var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var IconappData = require('../Mmodels/iconModel');
mongoose.connect('120.76.47.201:3029/gnomeDB')

var geticonData = function() {
    IconappData.find()
        .then(function(doc) {
            // console.log(doc)
            return doc
        })
}

console.log(geticonData)



/* GET Icons listing. */
router.get('/', function(req, res, next) {
    IconappData.find()
        .then(function(doc) {
            res.send(doc);
        })
});

module.exports = router;