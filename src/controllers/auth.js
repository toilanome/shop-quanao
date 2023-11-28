import User from "../models/User"
import dotenv from 'dotenv'
import { signInValidate, signUpValidate } from "../validate/User"
import bcryptjs from  'bcryptjs'
import jwt from 'jsonwebtoken'
dotenv.config()

const {SECRET_KEY} = process.env
export const signUp = async (req,res) =>{
    try {
        const {error} = signUpValidate.validate(req.body, {abortEarly:false} )
        if(error) {
            const errors = error.details.map((err) => err.message);

            return res.status(400).json({
                message:errors
            });
        }
        const UserExist = await User.findOne({email:req.body.email})
        if(UserExist) {
            return res.status(400).json({
                message: 'Email đã tồn tại'
            })
        }

        const hashPassword = await bcryptjs.hash(req.body.password, 10)
        const userAccount = await User.create({
            ...req.body,    
            password: hashPassword
        })
        if(!userAccount ){
            throw new Error('Failed!')
        }
        userAccount.password = undefined
        return res.status(200).json({
            message: "Đăng kí thành công",
            data : userAccount
        })
    } catch (error) {
        return res.json({
            name: error.name,
            message :error.message
        })
    }
}

export const signIn = async (req,res) =>{
    try {
        const {error} = signInValidate.validate(req.body, {abortEarly:false} )
        if(error) {
            const errors = error.details.map((err) => err.message);

            return res.status(400).json({
                message:errors
            });
        }
        const UserExist = await User.findOne({email:req.body.email})
        if(!UserExist) {
            return res.status(400).json({
                message: 'Email chưa tồn tại. Bạn có muốn đăng ký không'
            })
        }
        const isMatch = await bcryptjs.compare(
            req.body.password,
            UserExist.password
        )
        if(!isMatch){
            return res.status(400).json({
                message:"Mật khẩu không khớp "
            })
        }

        const accessToken = jwt.sign({_id:UserExist._id}, SECRET_KEY, {
            expiresIn:"1d"
        })

      
        
        UserExist.password = undefined
        return res.status(200).json({
            message: "Đăng nhập thành công",
            data : UserExist,
            accessToken
        })
    } catch (error) {
        return res.json({
            name: error.name,
            message :error.message
        })
    }
}