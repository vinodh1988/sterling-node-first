const dbops=require("../database/dpops")
const express = require("express")
const route = express.Router()

route.post("/store",function(request,response){
const data=
    {
     sno:request.body.sno,
     name:request.body.name,
     city:request.body.city
    }
   dbops.insert(data.sno,data.name,data.city,function(err,data){
       if(err)
         response.status(500).send("Unable to insert")
       else
         response.send("data Successfully inserted")
   })
})

module.exports = route
