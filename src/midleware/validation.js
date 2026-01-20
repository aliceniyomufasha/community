
import User from "../model/userModel.js"
export const EmailExist=async(req,res,next)=>{
    const email=req.body
      if (!email) {
      return res.status(400).json({ message: "Email is required" })
    }
    const user = await User.findOne(email)
    if(user){
        return res.status(403).json({ message:"user already exist"})
    }else{
        return next()
    }

}