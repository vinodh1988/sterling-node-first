const express=require("express")
const app  = express()
const path =require("path")

app.use(express.static(path.join(__dirname,"public/styles")))
app.use(express.static(path.join(__dirname,"public/scripts")))

app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,"public/index.html"))
})
app.get("/greet",function(request,response){
    response.send("How are you!!! Welcome!!!")
})
app.get("/",function(request,response){
     response.send("Hello!!! Node js is running...")
})

app.listen("8000",function(){
    console.log("server started in port number 8000")
})