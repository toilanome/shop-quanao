import React, {useState} from 'react'
import {useMutation} from '@tanstack/react-query'
import { signUp } from '../api/Auth'
import { toast } from 'react-toastify'
import { User } from '../../interface/Product'
import './styles.css'

const SignUp = () => {
    const [inputValue, setInputValue] =useState({})

    const mutationAccount = useMutation({
        mutationFn: (user:User) => signUp(user),
        onSuccess() {
            toast.success("Đăng ký thành công")

        },
        onError(){
            toast.error("Đăng ký thất bại, kiểm tra lại thông tin ")
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
                    <h1 className="title">Đăng Ký</h1>
                    <div className="card">
                        <form onSubmit={onSubmit}>
                        <input type="text" placeholder='Username' onChange={onChange} name='userName' />
                        <input type="email" placeholder='Email' onChange={onChange} name='email'/>
                        <input type="password" placeholder='Password'onChange={onChange} name='password' />
                        <input type="password" placeholder='ConfirmPassword' onChange={onChange} name='confirmPassword'/>
                            <div className="buttons">
                            <a href="/admin/signin" className="register-link">Đăng Nhập</a>
                                <button type="submit" className="login-button">Đăng Ký</button>
                            </div>
                        </form>
                    </div>
                </div>
    </>
  )
}

export default SignUp