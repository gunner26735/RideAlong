const mongo = require('mongoose')

var schema = new mongo.Schema({
    riderId:{
        type : mongo.Schema.Types.ObjectId,
        ref : 'ra_riderdb'
    },
    vehicleType : {
        type : String,
        enum : ['2wheeler','4wheeler'],
        default : null
    },
    vehicleReg : {
        type : String,
        unique : true
    },
    vehicleCapacity : {
        type : Number,
        require : true
    },
    source : {
        type : String
    },
    destination : {
        type : String
    },
    passenger : [String]
}) 

const ridesDB  = mongo.model('ra_ridesdb',schema)

module.exports = ridesDB