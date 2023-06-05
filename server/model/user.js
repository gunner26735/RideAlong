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

const userDB  = mongo.model('ra_userdb',schema)

module.exports = userDB