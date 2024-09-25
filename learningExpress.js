const bodyParser = require("body-parser");
const express = require("express");
const fs=require("fs");
const app = express();
const path = require("path");

app.use(bodyParser.json);

app.get( '/' , (req,res)=>{
    //   res.send("Hello There.." + req.query.name + " :) You are "+ req.query.age);
    res.sendFile(path.join(__dirname,'public','index1.html'));
});
app.post('/index1.html',async (req,res)=>{
    const data= `username: ${req.body.username},
        password: ${req.body.password}`;
    await fs.appendFile("new.txt",data,(err)=>{
        if(err){
            console.log("error occured"+err);
        }
        else{
            console.log("sucessfully added");
        }
    })   
})

app.listen(8000,()=>{
    console.log("server running..");
})