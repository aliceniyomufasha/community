import Category from "../model/category.js"

class CategoryController{
    static createCategory = async(req,res)=>{
        const category = await  Category.create(req.body)
        if (!category){
            return res .Status(404).json({message:"category not created"})
        }else{
            return res .status(201).json({message:"category successfuly created",category})
        }
    }
    static findAllCategory = async(req,res)=>{
        
        
    }
}
export default CategoryController