
import Service from "../model/serviceModel.js";
import User from "../model/userModel.js"
import Category from "../model/category.js";

class ServiceController{
static createdService = async(req,res)=>{
    const categoryId = req.body.Categorys
    const category = await Category .findById({_id:categoryId})
 if(!category){
    return res.status(404).json({message:'Category not found'})
 }else{
    const userId=req.user._id
    if(!userId){
        return res.status(404).json({message:"service not created"})
    }else{
        const service = await Service.create(req.body)
        if(!service){
            return res . status(404).json({message:'service not created'})
        }else{
            return res.status(201).json({message:"service successfuly created"})
        }
    }
 }
       
}
}
export default ServiceController