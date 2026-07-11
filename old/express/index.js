const http = require("http");
const express = require("express");

const app = express();

// .METHOD(Path,Handler)
app.get("/",(req,res) => {
    return res.send("Home or main");
});
app.get("/about",(req,res) => {
    return res.send("this is about page" + " hey " + req.query.name);
});

app.listen(8000,()=> console.log("Server is working "));

// const myserver = http.createServer(app)


// myserver.listen(8000,()=> console.log("Server is working "));