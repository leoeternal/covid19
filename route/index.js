var express=require("express");
var router=express.Router();
var request=require("request");

router.get("/developer",function(req,res){
res.render("developer")})
router.get("/",function(req,res){
    var url=process.env.url;
    var newsurl=process.env.newsurl10;
    request({url:url,json:true}, function (err,getdata) {
        if(err)
        {
            return console.log(err);
        }
        else
        {
            request({url:newsurl,json:true},function(err,getnews){
                if(err)
                {
                    return console.log(err);
                }
                else
                {
                    res.render("home",{data:getdata,news:getnews});
                }
            })
        }
    });
})

router.post("/country/name/result",function(req,res){
    var country=req.body.country;
    var url=process.env.newsurlcountry+country;
    request({url:url,json:true}, function (err,getdata) {
        if(err)
        {
            return console.log(err);
        }
        else
        {
            request({url:process.env.newsurl10,json:true},function(err,getNews){
                if(err)
                {
                    return console.log(err);
                }
                else
                {
                    res.render("countryDetail",{countryData:getdata,news:getNews});
                }
            })
        }
    });
})

router.get("/country/name/result/:countryname",function(req,res){
    var url="https://api.covid19api.com/total/dayone/country/"+req.params.countryname;
    request({url:url,json:true}, function (err,getdata) {
        if(err)
        {
            return console.log(err);
        }
        else
        {
            request({url:process.env.newsurl10,json:true},function(err,getNews){
                if(err)
                {
                    return console.log(err);
                }
                else
                {
                    res.render("countryDetail",{countryData:getdata,news:getNews});
                }
            })
        }
    });
})

module.exports=router;
