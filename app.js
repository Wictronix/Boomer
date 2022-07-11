const express = require("express");
const bodyParser = require("body-parser");

const app=express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
res.render("index");
});

app.get("/game",function(req,res){
  res.render("game");
});

app.post("/",function(req,res){
  res.redirect("/game");
});


app.listen(3000,function(){
  console.log("server started at 3000");
});
