const express = require("express");
const bodyParser = require("body-parser");

const app=express();

let links=["https://smashkarts.io/","http://slither.io/","https://wanderers.io/","https://skribbl.io/"];
let blogt=["Games are stress busters","Gaming increases efficiency","Billion Dollar industry"];
let blogi=["image/efficiency.jpg","image/industry.png","image/stress.png"];
let blogb=["Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quae! Reprehenderit, nisi debitis? Cumque repellendus excepturi eius? Amet maiores perspiciatis tempora quae voluptatibus eius consectetur minus nam quisquam temporibus, suscipit, tempore dignissimos nihil eaque esse itaque accusantium, fugit animi. Quos voluptates vel enim cupiditate omnis aliquam possimus pariatur natus itaque voluptatem! Facere voluptas inventore consequuntur, reprehenderit accusamus eos maiores animi nemo tenetur blanditiis corrupti quis officia laudantium itaque voluptatibus nesciunt.",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quae! Reprehenderit, nisi debitis? Cumque repellendus excepturi eius? Amet maiores perspiciatis tempora quae voluptatibus eius consectetur minus nam quisquam temporibus, suscipit, tempore dignissimos nihil eaque esse itaque accusantium, fugit animi. Quos voluptates vel enim cupiditate omnis aliquam possimus pariatur natus itaque voluptatem! Facere voluptas inventore consequuntur, reprehenderit accusamus eos maiores animi nemo tenetur blanditiis corrupti quis officia laudantium itaque voluptatibus nesciunt.",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quae! Reprehenderit, nisi debitis? Cumque repellendus excepturi eius? Amet maiores perspiciatis tempora quae voluptatibus eius consectetur minus nam quisquam temporibus, suscipit, tempore dignissimos nihil eaque esse itaque accusantium, fugit animi. Quos voluptates vel enim cupiditate omnis aliquam possimus pariatur natus itaque voluptatem! Facere voluptas inventore consequuntur, reprehenderit accusamus eos maiores animi nemo tenetur blanditiis corrupti quis officia laudantium itaque voluptatibus nesciunt."];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
res.render("index");
});

app.post("/",function(req,res){
  let item=req.body.playg;
  // console.log(item);
  
  res.render("game",{g1link:links[item-1]});

});

app.get("/game",function(req,res){
  res.render("game");
});



app.post("/gallery",function(req,res){
  res.render("gallery");
});

app.post("/blog",function(req,res){
  let item=req.body.playg;
  // console.log(item);
  
  res.render("blog",{Title:blogt[item-1],img1:blogi[item-1],body:blogb[item-1]});

});

app.post("/home",function(req,res){
  res.redirect("/");
});


app.post("/videos",function(req,res){
  res.render("videos");
});

app.post("/blog-page",function(req,res){
  res.render("blog-1");
});


app.listen(port,()=>{  // do not add localhost here if you are deploying it
  console.log("server listening to port "+port);
});