const express = require("express");


const { logReqRes } = require("./middlewares/index.js");
const {connectMDB} = require('./connection.js');
const userRouter = require("./routes/user.js");

// const user = require("./MOCK_DATA.json");
const app = express();
const port = 8000;


//

connectMDB('mongodb://127.0.0.1:27017/youtuble-app-1');


app.use(express.urlencoded({extended: false})); // midleware pluging
app.use(logReqRes("log.txt"));



app.use("/user",userRouter);


// app.router('/api/users/:id').get(()=>{}).post(()=>{}).patch(()=>{}).delete((=>{}))

app.listen(port,()=>console.log("the server is runing"));