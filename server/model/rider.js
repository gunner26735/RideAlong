const mongo = require('mongoose')

var schema = new mongo.Schema({
    name : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
        length : 12
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    gender : {
        type : String,
        enum : ['Male','Female'],
        default : "not prefer"
    },
    contact : {
        type : Number,
        unique : true
    }
}) 

const riderDB  = mongo.model('ra_riderdb',schema)

module.exports = riderDB