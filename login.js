const express= require('express');

const bodyPraser=require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


const app=express();
app.use(bodyPraser.json())
app.use(bodyPraser.urlencoded({    extended:false
}))


/*app.post('/hi',(req,res)=>{
    var search = req.body.somaaa;
    res.send(search);
console.log(search);
})*/




app.post('/bye',(req,res)=> {
// console.log(req.body,"body");


var search = req.body.name;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connected to Mongo")
    var dbo = db.db("vod");

    console.log(dbo.namespace)
    dbo.collection("user").findOne({username:search}, function(err, result) {
        console.log("user search")
        if (err) throw err;
        res.send("object found")

        db.close();
      });

    });
})

app.listen(3000, function(){
       console.log("server ready");
   })



  

