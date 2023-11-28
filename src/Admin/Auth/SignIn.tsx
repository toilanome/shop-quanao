import React, {useState} from 'react'
import {useMutation} from '@tanstack/react-query'
import { signIn, signUp } from '../api/Auth'
import { toast } from 'react-toastify'
import { User } from '../../interface/Product'
import './styles.css'

const SignIn = () => {
    const [inputValue, setInputValue] =useState({}) 

    const mutationAccount = useMutation({
        mutationFn: (user:User) => signIn(user),
        onSuccess(){
        toast.success("đăng nhập thành công")

        },
        onError(){
            toast.error("Đăng nhập thất bại, kiểm tra lại thông tin ")
        }
    })

    const onChange = (e:any) =>{
        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name]:value
        })
    }
    

    const onSubmit = (e:any) =>{
        e.preventDefault()
        mutationAccount.mutate(inputValue as User)
    }

  return (
    <>
        

                <div className="containers">
                    <h1 className="title">Đăng Nhập</h1>
                    <div className="card">
                        <form onSubmit={onSubmit}>
                        <input type="email" placeholder='Email' onChange={onChange} name='email'/>
                        <input type="password" placeholder='Password'onChange={onChange} name='password' />
                            <div className="buttons">
                            <a href="/admin/signup" className="register-link">Đăng Ký</a>
                                <button type="submit" className="login-button">Đăng Nhập</button>
                            </div>
                        </form>
                    </div>
                </div>
    </>
  )
}

export default SignIn