const { response } = require("express")
const express=require("express")
const app  = express()

app.get("/greet",function(request,response){
    response.send("How are you!!! Welcome!!!")
})
app.get("/",function(request,response){
     response.send("Hello!!! Node js is running...")
})
app.listen("8000",function(){
    console.log("server started in port number 8000")
})