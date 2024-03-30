 var mongoose=require("mongoose");

 const EmployeeSkill =mongoose.model("EmployeeSkill",new mongoose.Schema({
    employeeId:Number,
    employeeName:String,
    skillsId:Number,
    skillsName:String,
 }));
 module.exports= {EmployeeSkill};
  