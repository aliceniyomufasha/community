import User from "../model/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class controller {

    static signup = async (req, res) => {
        const { names, email, password, role } = req.body
        const hashPassword = bcrypt.hashSync(req.body.password, 10)
        try {
            const user = await User.create({ names, email, password: hashPassword, role })
            if (!user) {
                return res.status(400).json({ message: "user not found" })
            } else {
                return res.status(201).json({ message: "user created sucessfuly ", user })
            }
        } catch (error) {
            return res.status(500).json({ message: `create user failed ${error}` })
        }

    }
    static login = async (req, res) => {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "invalid email" })

        } else {
            const comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword) {
                return res.status(404).json({ message: "invalid password" })
            } else {
                const token = jwt.sign({ user: user }, process.env.SCRET_KEY, { expiresIn: "5d" })
                return res.status(201).json({ message: "login successfuly", token })
            }
        }

    }
    static getAllUsers = async (req, res) => {
        const users = await User.find()
        if (!users) {
            return res.status(404).json({ message: "user not found" })
        } else {
            return res.status(200).json({ message: "user successfuly retrive", users })
        }


    }
    static deleteAllUser = async (req, res) => {
        const user = await User.deleteMany()
        if (!user) {
            return res.status(404).json({ message: "user not deleted" })
        } else {
            return res.status(200).json({ message: "user successfuly deleted", user })
        }
    }
    static getOneUser = async (req, re) => {
        const id = req.params.id

        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({ message: "user not deleted" })

        } else {
            return res.status(200).json({ message: "user successfuly", user })
        }
    }
    static updateUser = async (req,res)=>{
        const id = res .params.id
        const user = await User.findByIdAndUpdate(id,req.body,{new:true})
        if(!user){
            return  res.status(404).json({message:"user not found"})
        }else{
            return res .status(201).json({message:"user successfuly update",user})
        }
    }






}
export default controller