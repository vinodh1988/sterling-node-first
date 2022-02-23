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

module.exports = route;