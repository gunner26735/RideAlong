const express = require("express");
const envFile = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const connectDB = require('./server/database/connection')

envFile.config({path:"config.env"});

const app = express();
const PORT = process.env.PORT ||8080;

// cookie parser middleware
app.use(cookieParser());

//setting up session
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    resave: false 
}));

// to log request
app.use(morgan("tiny"));

//mongoDB connection
connectDB();

//parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}))

//set view
app.set("view engine","ejs");

//load assets
app.use(express.static("assets"));

//load routes
app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{console.log('Server runnning on http://localhost:'+PORT)});
