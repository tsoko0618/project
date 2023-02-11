const { constants } = require("buffer");
const express = require("express");
const fs = require("fs/promises");
const path = require('path');


const { send } = require("process");
const {getStudents,addStudents} = require('./db_util/index');

const db_Utils = require('./db_util/index');
const app = express();

app.use(express.json())
app.use(express.static('public'))
let students;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/',async(req,res)=>{
  const[students] = await pool.query('selct * from students')
  // res.sendFile(path.join(__dirname,'index.html'))
})


// GET POST PUT ~ELETE //crud
app.get('/students', async(req,res)=>{
    const student = await getStudents()
    res.send(students)
})

app.post('/students', async(req,res)=>{
  const data = await addStudents(req.body.name);
  res.send(data)
});

app.put('/students',(req,res)=>{
  console.log("A12", req.body)
  pool.query(`update students set firstname='${req.body.name}'where id=${req.body.id}`), (err, data)=>{
    if(err){
      throw err
    }else{
      console.log(data)
    }
  }
});
app.delete('/students/:id',(req,res)=>{
  pool.query(`delete from students where id=${req.params.id}`), (err, data)=>{
    if(err){
      throw err
    }
    else{
      console.log(req.params.id)
    }
  }
})

// port blhgu /////////////////
app.listen(3000, ()=>{
  console.log("server listen 3000port")
})








