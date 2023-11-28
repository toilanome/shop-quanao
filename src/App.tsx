import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import './App.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './pages/Header';
import PageLayout from './pages/PageLayout';
import AdminLayout from './Admin/AdminLayout';

import Products from './pages/Products';
import Footerne from './pages/Footer';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import HomePage from './pages/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (

    <>


      <Router>
        {/* <Header /> */}

        <Routes>
          <Route path='/' element={<PageLayout />}   >
            <Route index path='/' element={<HomePage />}  />
              <Route path='/cart' element={<Cart />} />
              <Route path="/products/" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />

          </Route>
          
          
          <Route path='/admin/*' element={<AdminLayout />} />
        </Routes>

        {/* <Footerne /> */}
      </Router>



      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />




    </>
  )
}

export default App
