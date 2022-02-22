   const connection=require("./dbconfig")

 operations ={
     insert: function(sno,name,city,callback){
         connection.query("insert into people values(?,?,?)",
         [sno,name,city],
         callback)
          }
        }