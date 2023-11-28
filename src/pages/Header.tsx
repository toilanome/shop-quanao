import React from 'react'
import logo from '../Images/logo.png'
const Header = () => {
    return (
        <header className='mb-10' >
            <div className='container'>
                <div className='flex justify-center mb-3'>
                    <div className='mb-3'>
                        <img src={logo} alt="" />

                    </div>



                </div>
                <hr />
                <div className='mt-8'>
                    <ul className='flex justify-center items-center'>
                        <li className='mr-4 ml-4'><a href="/" className='text-black'>HOME</a></li>
                        <li className='mr-4 ml-4'><a href="/products" className='text-black'>PRODUCTS</a></li>
                        <li className='mr-4 ml-4'><a href="" className='text-black'>CONTACT</a></li>
                        <li className='mr-4 ml-4'><a href="" className='text-black'>ABOUT</a></li>
                        <li className='mr-4 ml-4'><a href="/admin/signin" className='text-black'>LOGIN</a></li>

                    </ul>
                </div>

            </div>
        </header>
    )
}

export default Header
