const express = require("express");

const router = express.Router();

const User = require('../models/user.js');

const {handlealluser,handleiduser,handle_all_new_user,edituserinfo,deletetheuser} = require('../controllers/user.js');
// router.get("/users",async (req,res)=>{
//     const alldbuser = await User.find({});
//     const html = `${alldbuser.map((user)=> `<li>${user.firstName} - ${user.email}</li>`).join("")}`;
//     res.send(html);
// });

router.get('/', handlealluser );

// :id -> dynamic


router.get("/:id", handleiduser);



router.post('/', handle_all_new_user);


router.patch('/:id',edituserinfo );


router.delete('/api/users/:id',deletetheuser );




module.exports = router;