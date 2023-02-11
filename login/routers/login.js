const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');



router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../login.html'));
})
router.post('/',(req,res)=>{
    
    let students = JSON.parse(fs.readFileSync(path.join(__dirname,"../users.json"),'utf-8'));
   let student =  students.find((elements)=>{
        return (elements.username==req.body.un && elements.password==req.body.pw)
    });
    if(student){
        req.session.canLog=true,
        res.redirect('/');
    }else{
        res.send('faild');
    }
 
});
module.exports=router