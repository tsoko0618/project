const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { json } = require('express');
const bcrypt = require('bcrypt')

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../register.html'))
})
router.post('/',async(req,res)=>{
 let students = JSON.parse(fs.readFileSync(path.join(__dirname,"../users.json"),'utf-8'));
 if(students.find((elements)=>{
    return(req.body.un==elements.username);
 })){
    res.send("hereglech bvrtgedsen bna ")
 }else if(req.body.pw!==req.body.cpw){
    res.send("password shalgana uu !!! ");
 }else{
    students.push({username:req.body.un,password:req.body.pw});
    fs.writeFileSync(path.join(__dirname,"../students.json"),JSON.stringify(students,null,2))
    res.redirect('/login');
 }
});
module.exports=router