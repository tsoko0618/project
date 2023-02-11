const { constants } = require("buffer");
const express = require("express");
const session = require('express-session');
const { send, argv } = require("process");
const indexRouter = require("./routers")
const LoginRouter = require('./routers/login')
const registerRouter = require('./routers/register')
const app = express();
//enivormental varaible
//GET POST PUT DELETE //crud
app.use('/public',express.static('public'))

//body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));
 
// session
app.use(session(
    {
        cookie:{
          
            maxAge:1000,
            sameSite:true
            
        },
        canLog:false,
        secret:"bat",
        resave:false,
        saveUninitialized:false,
        
    }
))


function check(req,res,next){
    console.log(req.session)
    if(req.session.canLog==true){
        next()
    }else{
        res.redirect("/login")
    }
}

//routing
app.all(["/",'index'],check, indexRouter);
app.use('/login',LoginRouter)
app.use('/SingUp',registerRouter)
app.listen(3000, async ()=>{
 console.log("server listen 3000port",)
})


