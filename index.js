const fs = require ("fs")
const x =  require("./second")

x.greet()
console.log(x.people)

console.log("Hi !!! HelloW")

console.log(__dirname )

fs.readFile("package.json","utf-8",function(err,data){
  if(err)
        console.log("error ..!!")
   else
        console.log(data)
})

console.log("Code after file reading")