
import jwt from "jsonwebtoken"
  export function VerifyAccess(passRole){
    return (req,res,next)=>{
        const token = req.headers['autho-token']
        if(!token){
            return res.status(404).json({message:"Not token provide"})
        }else{
            
            try {
                const verifyToken = jwt .verify(token,process.env.SCRET_KEY, {expiredin:'5d'})
                req.user = verifyToken.user
                if(passRole != verifyToken.user.role){
                    return res.status(401).json({message:"please you don't have access"})
                }else{
                    return next()
                }
            } catch (error) {
                
                if((error.name="jsonWebTokenError")){
                    return res.status(401).json({message:"invalid token or expired token"})
                }else{
                    return res .status(500).json({message:`error is ${error}`})
                }
            }
        }

    }
}