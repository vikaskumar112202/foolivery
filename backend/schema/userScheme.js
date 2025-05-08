const mongoose = require("mongoose")

const userSchema =new mongoose.Schema({
    fullName:{
        type:String,
        required: [true,"full name is required"],

    },
    email:{ 
        type:String,
        required: [true,"email is required"],
        unique:true,
        trim:true,
        lowercase:true,

    },
    phone:{
        type: Number,
        require: true,
        required: [true, "Phone is required"],
    },
    password:{
        type:String,
        required: [true, "Password is required"],
        minlength: 6,
        message: "password atleast of 6 characters",

    },
 
},
{timestamps:true},
);

const User = mongoose.model("user",userSchema);

module.exports = User;