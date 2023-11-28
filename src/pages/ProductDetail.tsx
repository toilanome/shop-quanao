import React, {useContext} from 'react'
import img2 from '../Images/img2.png'
import {useParams} from 'react-router-dom'
import { ShopcontextMain } from '../Context/ShopContext'
const ProductDetail = () => {
    const {products, isLoading, isError, addToCart} = useContext(ShopcontextMain)
    console.log('detail', products);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (isError) {
        return <div>Error loading products</div>;
    }
    const {id} = useParams()
    
    const product = products.data.find((e :any) => e._id === id)
    console.log("check pro0", product);
    
    return (
        <div className='container flex justify-center'>
            <div >
                        <div className='flex gap-28' >
                        <>
                        <div>
                            <img src={product.image} style={{ height: '700px', width:'700px' }} alt="" />
                        </div>
    
                        <div className='info '>
                            <div>
                                <span>{product.name}</span>
    
                                <div className='mb-3 mt-3'>
    
                                    <h2>{product.category}</h2>
                                </div>
    
                                {/* <span>Collection fw'20</span> */}
                                {/* <br /> */}
                                {/* <div className='mb-3 mt-3'>
                                    <span>Black OAK</span>
    
                                </div> */}
                                <br />
                                <div className='w-64 mb-5'>
                                    <p>{product.description}</p>
    
                                </div>
                            </div>
    
                            <div>
                                Size : <select name="" id="">
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="L">XL</option>
                                </select>
                                <br />
                                <div className='mt-5'>
                                    Quanlity <input type="number" />
    
                                </div>
                                <br />
    
                                <span>$ {product.price}</span>
                            </div>
    
                            <div className='mt-9'>
                                <button className='w-full bg-black text-white' onClick={() => addToCart(product._id)}>ADD TO CART</button>
                            </div>
    
                        </div>

                         
                        </>
                       
                        
                    </div>
                
            </div>
        </div>

    )
}

export default ProductDetail
