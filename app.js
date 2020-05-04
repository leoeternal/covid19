var express=require("express");
var bodyParser=require("body-parser");
var plotlib=require("nodeplotlib");

require("dotenv").config();

var app=express();

var indexRoute=require("./route/index");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended:false}));

app.set("view engine","ejs");


app.use(indexRoute);

app.listen(process.env.PORT||3000,function(){
    console.log("server has started");
})