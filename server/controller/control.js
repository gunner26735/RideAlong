var userDB = require('../model/user')
var riderDB = require('../model/rider')
var ridesDB = require('../model/rides')

var session;

//create and save new user
exports.create = (req,res)=>{
    if(!Object.keys(req.body).length){
        res.status(400).send({message:'content cannot be empty'});
        return;
    }
    rname= req.body.name;
    rgender= req.body.gender;
    rcontact= req.body.contact;
    rpass= req.body.pass;
    remail= req.body.email;
    const user = new userDB({
        name : rname,
        password : rpass,
        email : remail,
        gender : rgender,
        contact : rcontact
    })
    //console.log(user);
    user.save(user).then(function(){
        res.status(200).send({message:"User Created"});
    }).catch(function(err){
        res.status(500).send({message:err.message||"some error occur while creating user"})
    })
}

//vaildate a user
exports.uLogin = (req,res)=>{
    if(!Object.keys(req.body).length){
        res.status(400).send({message:'content cannot be empty'});
        return;
    }

    //validate user
    var email = req.body.email;
    var pass = req.body.pass;
    userDB.find({email:email}).then(function(data){
        if((data[0].password == pass) && (data[0].email == email)){
            res.status(200).send({message:"Validated",data:data[0]});
        }
        else{
            res.status(500).send({message:"User is not valid"});
        }
    }).catch(function(err){
        res.status(500).send({message:"some error occur while validating user"})
    })
}

//create and save new user
exports.createRider = (req,res)=>{
    if(!Object.keys(req.body).length){
        res.status(400).send({message:'content cannot be empty'});
        return;
    }
    rname= req.body.name;
    rgender= req.body.gender;
    rcontact= req.body.contact;
    rpass= req.body.pass;
    remail= req.body.email;
    const user = new riderDB({
        name : rname,
        password : rpass,
        email : remail,
        gender : rgender,
        contact : rcontact
    })
    //console.log(user);
    user.save(user).then(function(){
        res.status(200).send({message:"Rider Created"});
    }).catch(function(err){
        res.status(500).send({message:err.message||"some error occur while creating user"})
    })
}

//vaildate a user
exports.rLogin = (req,res)=>{
    if(!Object.keys(req.body).length){
        res.status(400).send({message:'content cannot be empty'});
        return;
    }
    session=req.session;
    //validate user
    var email = req.body.email;
    var pass = req.body.pass;
    riderDB.find({email:email}).then(function(data){
        if((data[0].password == pass) && (data[0].email == email)){
            session.riderId=data[0]._id;
            console.log(session.riderId);
            res.status(200).send({message:"Validated",data:data[0]});
        }
        else{
            res.status(500).send({message:"Rider is not valid"});
        }
    }).catch(function(err){
        res.status(500).send({message:"some error occur while validating Rider"})
    })
}

//create a new rider rides
exports.setRide = (req,res)=>{
    if(!Object.keys(req.body).length){
        res.status(400).send({message:'content cannot be empty'});
        return;
    }
    session = req.session;
    var rid = session.riderId;
    var vtype = req.body.vtype;
    var vreg = req.body.vreg;
    var rsource = req.body.source;
    var rdest = req.body.dest;
    var vcapacity = 0;
    if(vtype == "2wheeler"){
        vcapacity = 1;
    }
    else if(vtype == "4wheeler"){
        vcapacity = 4;
    }
    
    const newRide = new ridesDB({
        riderId : rid,
        vehicleType : vtype,
        vehicleReg : vreg,
        vehicleCapacity : vcapacity,
        source : rsource,
        destination : rdest
    })

    newRide.save(newRide).then(function(){
        res.status(200).send({message:"Ride has been added"});
    }).catch(function(err){
        res.status(500).send({message:err.message||"some error occur while adding ride"})
    })
}

//finds a rider for user
exports.getRider = (req,res)=>{
    if(!Object.keys(req.body).length){
        res.status(400).send({message:'content cannot be empty'});
        return;
    }

    var rsource = req.body.source;
    var rdest = req.body.dest;
    ridesDB.find({source:rsource,destination:rdest}).then(function(data){
        res.status(200).send(data);
    }).catch(function(err){
        res.status(500).send({message:"some error occur while validating Rider"})
    })
}