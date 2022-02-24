const express=require("express")
const app  = express()
const path =require("path")
const people =require('./routes/people')
const peopleapi =require('./routes/rest')
const deptapi= require('./orm/routes')

app.use(express.static(path.join(__dirname,"public/styles")))
app.use(express.static(path.join(__dirname,"public/scripts")))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('views', path.join(__dirname, 'public/views'));//setting the path of template files
app.set('view engine', 'pug'); //configuring view Engine

app.use("/people",people)
app.use("/peopleapi",peopleapi)
app.use("/deptapi",deptapi)

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