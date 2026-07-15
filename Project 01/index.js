const express = require("express");
const fs = require('fs');
const mongoose = require("mongoose");





// const user = require("./MOCK_DATA.json");
const app = express();
const port = 8000;


//

mongoose.connect('mongodb://127.0.0.1:27017/youtuble-app-1').then(()=> console.log("MongoDB Connected")).catch((err) => console.log("Mongo Error", err));

const schema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true, 
    },
    jobtitle:{
        type: String,
    },
    gender:{
        type: String,
    },
},
    {timestamps: true}
);


const User = mongoose.model("user",schema);
app.use(express.urlencoded({extended: false})); // midleware pluging

app.use((req,res,next)=>{
    console.log("M1");
    // res.send("ended");
    next();
})


app.use((req,res,next)=>{
    console.log("M2");
    // res.send("iv");
    // return res.end("ended")
    next();
})


app.get("/users",async (req,res)=>{
    const alldbuser = await User.find({});
    const html = `${alldbuser.map((user)=> `<li>${user.firstName} - ${user.email}</li>`).join("")}`;
    res.send(html);
});

// rest api


app.get('/api/users',async (req,res)=>{
    const alldbuser = await User.find({});
    return res.json(alldbuser);
});

// :id -> dynamic


app.get("/api/users/:id", async(req,res)=>{
    const x  = await User.findById(req.params.id);


    if(!x){
          res.status(404);
         return res.send("no");
}
    return res.json(x);
});



app.post('/api/users', async(req,res) =>{
    const body = req.body;
    if(!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        res.status(400);
        return res.json({msg: "All field are req.. "});
    }
    const result = await User.create({
        firstName: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        jobtitle: body.job_title,
    })

    console.log("result", result);

    return res.status(201).json({msg: "succes"})
    // return res.json({status: "pending"});
});


app.patch('/api/users/:id', async(req,res) =>{
    const id =req.params.id; // this is taking id from url
    const body = req.body; // this is storing clint send the updated info
    await User.findByIdAndUpdate(id,{
        firstName: body.first_name,
        last_name: body.last_name,
        email: body.email,
        jobtitle: body.job_title,
    });
    return res.json({status: "sus"});
});


app.delete('/api/users/:id', async(req,res) =>{
    await User.findByIdAndDelete(req.params.id); // this is taking id from url
    return res.json({status: "Success"});
});




// app.router('/api/users/:id').get(()=>{}).post(()=>{}).patch(()=>{}).delete((=>{}))

app.listen(port,()=>console.log("the server is runing"));