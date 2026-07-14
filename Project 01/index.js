const express = require("express");
const user = require("./MOCK_DATA.json");
const fs = require('fs')
const app = express();
const port = 8000;

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
app.get("/users",(req,res)=>{
        const html =`
    
        ${user.map((user)=>`<li>${user.first_name}</li>`).join("")}
    `;
    res.send(html);
});

// rest api


app.get('/api/users',(req,res)=>{
    return res.json(user);
});

// :id -> dynamic


app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id); // taking user no. from url

    const x = user.find((user)=> user.id === id)

    return res.json(x);
});



app.post('/api/users', (req,res) =>{
    const body = req.body;
    user.push({...body, id: user.length+1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(user),(err,data)=>{
        return res.json({status: "success", id: user.length});
    });
    // return res.json({status: "pending"});
});


app.patch('/api/users/:id', (req,res) =>{
    const id = Number(req.params.id); // this is taking id from url
    const body = req.body; // this is storing clint send the updated info
    const updated = user.map(s => s.id === id ? { ...s,...body } : s);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(updated),(err,data)=>{
        return res.json({status: "success", id: id});
    });
});


app.delete('/api/users/:id', (req,res) =>{
    const id = Number(req.params.id); // this is taking id from url
    const body = req.body; // this is storing clint send the updated info
    let i =1;
    const updated = user.filter(s => s.id !== id);
    const z = updated.map(s => i++ === s.id ? s : {...s, id: i-1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(z),(err,data)=>{
        return res.json({status: "success", id: id});
    });
});




// app.router('/api/users/:id').get(()=>{}).post(()=>{}).patch(()=>{}).delete((=>{}))

app.listen(port,()=>console.log("the server is runing"));