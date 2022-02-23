const dbops=require("../database/dpops")
const express = require("express")
const route = express.Router()

route.get("/all",function(request,response){
    dbops.getPeople(function(err,data){
        if(err)
            response.status(500).send("internal error")
        else
            response.json(data)
    })
})

route.post("/add",function(request,response){
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
             response.status(201).send("data Successfully inserted")
       })
    })



module.exports = route;