const express = require("express");
const {Employee} = require("../models/employee");

const router = express.Router();

router.get("/",async(req,res)=>{
    const employee = await Employee.find()
    .sort("name");
  res.send(employee);
});