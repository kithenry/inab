const express = require("express");

// creating express app
const app = express();

// setting up view engine
app.set("view engine","ejs");
app.set("views","../views");

// setting up middleware
const morgan = require("morgan");

const PORT = 3000;

// configuring middleware
app.use(morgan("combined"));


//-----setting up handlers


// index page handler
app.get("/", (req, res)=>{
    res.render("index");
})

// login handler
app.get("/login", (req, res)=>{
    res.render("login");
})

// home page handler
app.get("/home",(req,res)=>{
    res.render("home");
})


// listening on PORT
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})