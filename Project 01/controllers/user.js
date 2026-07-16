const User = require('../models/user.js');



async function handlealluser(req,res){
    const alldbuser = await User.find({});
    return res.json(alldbuser);
};


async function handleiduser(req,res){
    const x  = await User.findById(req.params.id);
    if(!x){
          res.status(404);
         return res.send("no");
}
    return res.json(x);
};



async function handle_all_new_user(req,res){
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

    return res.status(201).json({msg: "succes",id: result._id})
    // return res.json({status: "pending"});
};



async function edituserinfo(req,res){
    const id =req.params.id; // this is taking id from url
    const body = req.body; // this is storing clint send the updated info
    await User.findByIdAndUpdate(id,{
        firstName: body.first_name,
        last_name: body.last_name,
        email: body.email,
        jobtitle: body.job_title,
    });
    return res.json({status: "sus", id: User._id});
};


async function deletetheuser(req,res){
    await User.findByIdAndDelete(req.params.id); // this is taking id from url
    return res.json({status: "Success"});
};




module.exports= {
    handlealluser,
    handleiduser,
    handle_all_new_user,
    edituserinfo,
    deletetheuser,
}