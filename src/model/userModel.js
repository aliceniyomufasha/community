import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    names:{
        type:String,
        required:[true,"please provide your name"]
    },

    email:{
        type:String,
        required:[true,"please provide your email"],
        unigue:true
    },
    password:{
        type:String,
        reguired:[true,"please provide your password"]
        
    },
    role:{
        type:String,
        enum:['client', 'provider', 'admin'],
        default:"client"
    },
    createdAt:{
        type:String,
        default:new Date(Date.now())
    }


})
const User = mongoose.model("User" , userSchema)
export default User