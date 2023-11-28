import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';

import Footerne from './Footer';
import Products from './Products';
import Cart from './Cart';
import ProductDetail from './ProductDetail';

const PageLayout = () => {
    return (
        <>
            {/* <Header /> */}
            {/* <Navbar /> */}
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />}  />
                <Route path='/cart' element={<Cart />} />
                <Route path="/products/" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                    




            </Routes>
            <Footerne />
        </>
    )
}

export default PageLayout
