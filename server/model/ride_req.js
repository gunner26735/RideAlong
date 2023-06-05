const mongo = require('mongoose')

var schema = new mongo.Schema({
   rideId : {
    type : Number,
    ref : "ra_ridesdb"
   },
   userId : {
    type : Number,
    ref : "ra_userdb"
   },
   status : {
    type : Boolean
   }
}) 

const rideReqDB  = mongo.model('ra_ride_req',schema)

module.exports = rideReqDB