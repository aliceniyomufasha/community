import mongoose from "mongoose";
const categorySchema=new mongoose.Schema({
    categoryName:{
        type:String,
        reguired:[true,'category name is needed']
    },
    createdAt:{
        type:Date,
        default:new Date(Date.now())
        
    }
})
const Category = mongoose.model("Category",categorySchema)
export default Category