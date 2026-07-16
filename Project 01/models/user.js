const mongoose = require("mongoose");



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


module.exports = User;