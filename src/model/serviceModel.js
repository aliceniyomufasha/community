

import mongoose from "mongoose"
const serviceShema= new mongoose.Schema({
    title:{
type:String,
reguired:[true,'please title is reguired']
    },
    description:{
        type:String,
        reguired:[true,'please describtion is reguired']
    },
    categorys:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    price:{
        type:Number,
        reguired:[true,'please price is reguired']

    },
    provider:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    createdAt:{
        type:Date,
        default:new Date(Date.now())
    }
})
serviceShema.pre(
    /^find/,function(next){
        this.populate({
            path:"categorys",select:"categoryName"
        }).populate({
            path:"provider",select:"names email"
        })
        next()

    }
)
const Service = mongoose.model("Service ", serviceShema)
export default Service