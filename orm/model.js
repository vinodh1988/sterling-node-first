const Sequelize = require('sequelize');
var sequelize=require('./connection');

var department=sequelize.define('department',{
    department_id:{
      type: Sequelize.INTEGER,
      primaryKey:true
    },
    name:{
      type: Sequelize.TEXT,
      allowNull:false
    },
    headquarters:{
      type: Sequelize.TEXT,
      allowNull: true
    }
  });

  var employee=sequelize.define('employee',{
    employee_id:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    desig:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    city:{
        type: Sequelize.TEXT,
        allowNull:false
    }
})


department.hasMany(employee,{foreignKey: 'department_id'});
employee.belongsTo(department,{foreignKey: 'department_id'});

department.sync({alter: true,drop: false}).then(() => {
    
    console.log("Department table Synched!!!");
  });

employee.sync({alter: true, drop: false}).then(() => {
    
    console.log("Employee table Synched!!!");
  });


  module.exports={employee:employee,department:department};