import React, { useContext } from 'react'
import { ShopcontextMain } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'
import {useMutation, useQueryClient} from '@tanstack/react-query'


const ListProduct = () => {
    const { products, mutationDelete, isLoading, isError } = useContext(ShopcontextMain)
    console.log('products', products);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (isError) {
        return <div>Error loading products</div>;
    }
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='p-5'>
                <div className='flex items-center justify-between'>
                    <h3>Products</h3>
                    <Link to={'/admin/add-product'}>
                        <button>Create Product</button>
                    </Link>
                </div>

                {/* <a href="/admin/add-product">Create Product</a> */}
                <table className="table-auto border border-gray-400">
                    <thead className='border-b border-b-gray-400'>
                        <tr>
                            <th className='p-4'>STT</th>
                            <th className='p-4'>Name</th>
                            <th className='p-4'>Price</th>
                            <th className='p-4'>Image</th>
                            <th className='p-4'>Category</th>
                            <th className='p-4'>Description</th>
                            <th className='p-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {products.data.map((item: any, index: number) => (
                            <tr key={index} className=' border-b border-b-gray-400'>
                                <td className='p-3'>{index + 1}</td>
                                <td className='p-3'>{item.name}</td>
                                <td className='p-3'>{item.price}</td>
                                <td className='p-3'>
                                    <img src={item.image} alt="" className='w-40 h-40' />
                                </td>
                                <td className='p-3'>{item.category}</td>
                                <td className='p-3'>{item.description}</td>
                                <td className='p-3'>
                                    <button onClick={() => mutationDelete.mutate(item._id)} className='bg-red-600 text-white mr-2'>Delete</button>
                                    <Link to={`/admin/product-edit/edit/${item._id}`}>
                                        <button className='bg-cyan-500 text-white'>Edit</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ListProduct
