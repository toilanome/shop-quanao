import React, { useContext } from 'react'
import ShopContext, { ShopcontextMain } from '../Context/ShopContext'
const Cart = () => {

    const {getTotalProduct, cartItems,addToCart, removeCart,cart,  products} = useContext(ShopcontextMain)

console.log('check cart', cart);

    return (
        <div>
            <div className='container'>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((e:any) => (
                                <tr key={e._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {e.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        <img src={e.image} alt="" />
                                    </td>
                                    <td className="px-6 py-4">
                                        {e.price}
                                    </td>
                                    <td className="px-6 py-4">
                                    {e.category}
                                        
                                    </td>
                                    <td className="px-6 py-4">
                                    {e.description}
                                        
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                                    </td>
                                </tr>
                            ))}
                                    
                                
                        
                            
                           
                        </tbody>
                    </table>
                </div>

                <div className='flex justify-between  mt-24 '>
                    <div>
                        {/* <span>  </span> <a href="/products" className='text-black pb-1 inline-block'><i className="fa-solid fa-house"></i> </a> */}
                    </div>
                    <div className='text-right'>
                        <span className='mr-5'>Subtotal</span>
                        <span>$1,095.00 USD</span>
                        <br />
                        <div className=''>
                            <span className='text-xs mb-8'>Taxes and shipping calculated at checkout</span>

                        </div>
                        <br />

                        <button className='w-full bg-black text-white' style={{ width: '290px' }}>CHECKOUT</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Cart
