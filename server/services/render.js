const axios = require("axios");
const { response } = require("express");

exports.renderHome = (req,res)=>{
    res.render("index");
}

exports.renderRiderLogin = (req,res)=>{
    res.render("rider_login");
}

exports.renderUserLogin = (req,res)=>{
    res.render("user_login");
}

exports.renderRiderReg = (req,res)=>{
    res.render("rider_register");
}

exports.renderUserReg = (req,res)=>{
    res.render("user_register");
}

exports.renderRider = (req,res)=>{
    res.render("rider_home");
}

exports.renderUser = (req,res)=>{
    res.render("user_home");
}

exports.renderRides = (req,res)=>{
    var r_source = req.query.source;
    var r_dest = req.query.dest;
    var data= {
        source : r_source,
        dest : r_dest
    };
    var config ={ headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }};
    axios.post('http://localhost:8080/api/find',data,config).then(function(ride_data){
        //console.log(ride_data.data)
        //res.render("show_rides",{rides:ride_data.data})
    }).catch(err=>{
        res.send(err);
    })
    res.render("show_rides");
}
