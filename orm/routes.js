const model=require('./model')
const route=require("express").Router();



route.get("/departments",function(request,response){
    model.department.findAll(
        {include:[model.employee]}
      ).then(function(data){
          response.json(data);
      }).catch(function(err){
          response.render([]);
      })
})



route.post("/departments",function(request,response){
var dept={department_id:request.body.department_id,
          name:request.body.name,
          employees:request.body.employees}
          console.log(dept);
    model.department.create(dept,{include: [model.employee]}).then(
        ()=>response.send("successfully uploaded")
    ).catch(
        ()=>response.sendStatus(500)
    );
})

module.exports = route