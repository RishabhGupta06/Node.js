const express = require("express");
const user = require("./MOCK_DATA.json");
const app = express();
const port = 8000;



app.get("/users",(req,res)=>{
        const html =`
    <ul>
        ${user.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>`;
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
    // todo
    return res.json({status: "pending"});
});


app.patch('/api/users/:id', (req,res) =>{
    // todo
    return res.json({status: "pending"});
});


app.delete('/api/users/:id', (req,res) =>{
    // todo
    return res.json({status: "pending"});
});




// app.router('/api/users/:id').get(()=>{}).post(()=>{}).patch(()=>{}).delete((=>{}))

app.listen(port,()=>console.log("the server is runing"));