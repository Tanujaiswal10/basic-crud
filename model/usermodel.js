const {model, Schema} = require("mongoose")

const userModel = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    standard:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    school:{
        type:String,
        required:true
    }
})

const User = new model("user",userModel);

module.exports = User;