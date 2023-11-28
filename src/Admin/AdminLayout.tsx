import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateProduct from './Product/CreateProduct'
import ListProduct from './Product/ListProduct'
import UpdateProduct from './Product/UpdateProduct'
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'

const AdminLayout = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<ListProduct />} />
                <Route path='/add-product' element={<CreateProduct />} />
                <Route path='/product-edit/edit/:id' element={<UpdateProduct />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/signin' element={<SignIn />} />
            </Routes>





        </>

    )
}

export default AdminLayout
