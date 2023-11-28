import React from 'react'
import './CSS/Style.css'
import footer_logo from '../Images/logo_big.png'
import instagram_icon from '../Images/instagram_icon.png'
import pintester_icon from '../Images/pintester_icon.png'
import whatsapp_icon from '../Images/whatsapp_icon.png'
import Twitter from '../Images/Twitter.svg'
import instar from '../Images/Instagram.svg'
import fb from '../Images/Facebook.svg'

const Footerne = () => {
    return (
        <>
            <footer className=' footer ' style={{ marginTop: "100px" }}>
                <div className='container'>
                    <div className='mb-8'>
                        <ul className='flex justify-center '>
                            <li className='ml-6 mr-6'>ABOUT</li>
                            <li className='ml-6 mr-6'>VALUES</li>
                            <li className='ml-6 mr-6'>CONTACT</li>
                            <li className='ml-6 mr-6'>FACEBOOK</li>
                            <li className='ml-6 mr-6'  >INSTAGRAM</li>
                        </ul>
                    </div>
                    <hr />
                    <div className='flex justify-center mt-5 mb-8'>
                        <span>© 2020 all rights reserved.</span>
                    </div>
                </div>
            </footer>
        </>


    )
}

export default Footerne
