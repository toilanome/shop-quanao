import React, { useContext, useEffect } from 'react'
import img2 from '../Images/img2.png'
import './CSS/Style.css'
import {Link} from 'react-router-dom'
import { ShopcontextMain } from '../Context/ShopContext'


const Products = () => {
    const {products, isLoading, isError} = useContext(ShopcontextMain)
    console.log("products ne" , products);
    
    if(isLoading){
        return <div>Loading...</div>
    }
    if (!Array.isArray(products.data)) {
        return <div>Error: Products is not an array</div>;
    }

    return (
        <div className='container'>
            <h2 className='text-center'>ALL PRODUCTS</h2>

            {products.data.map((item :any, index :any) =>(
                <div className='product' key={index}>
                <div className="col" >
                    <div>products
                     <Link to={`/products/${item._id}`}>
                     <img src={item.image} alt="" />
                     </Link>   
                    </div>
                    <div className='mt-5'>
                        <div className='mb-2'>
                            <span>{item.name}</span>

                        </div>
                        <span>$ 325.00 - $ 450.00</span>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div className='mt-5'>
                        <div className='mb-2'>
                            <span>Kaila Dress Es</span>

                        </div>
                        <span>$ 325.00 - $ 450.00</span>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div className='mt-5'>
                        <div className='mb-2'>
                            <span>Kaila Dress Es</span>

                        </div>
                        <span>$ 325.00 - $ 450.00</span>
                    </div>
                </div>
            </div>
            ))}
            

        </div>
    )
}

export default Products
