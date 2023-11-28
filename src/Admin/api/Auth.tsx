import { User } from "../../interface/Product"
import baseAuth from "./baseAuth"

export const signUp = (user:User) =>{
    return baseAuth.post('/signup', user)
}
export const signIn = (user:User) =>{
    return baseAuth.post('/signin', user)
}