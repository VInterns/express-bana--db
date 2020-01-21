const express= require('express');

const bodyPraser=require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const app=express();
app.use(bodyPraser.json())
app.use(bodyPraser.urlencoded({    extended:false
}))







// app.post('/bye',(req,res)=> {
    var hash = bcrypt.hashSync("12345", saltRounds);
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj = { name: "ahmed", address: "Highway 37",password:hash };
        dbo.collection("customers").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
    //   });


/* var search = req.body.name;
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

    }); */
})

app.listen(4000, function(){
       console.log("server ready");
   })



  

