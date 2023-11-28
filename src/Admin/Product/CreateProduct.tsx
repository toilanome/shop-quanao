import React, { useEffect, useState, useContext } from 'react'
import { IProduct } from '../../interface/Product'
import { ShopcontextMain } from '../../Context/ShopContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import {useMutation,useQueryClient,useQuery} from '@tanstack/react-query'
import { CreateProducts } from '../api/product';

const CreateProduct = () => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({})
  const { queryClient, products } = useContext(ShopcontextMain)
  console.log(inputValue);
  console.log("prodcuts", products);

  const mutationCreate = useMutation({
    mutationFn: (product:IProduct) => CreateProducts(product),
    onSuccess : () =>{
      queryClient.invalidateQueries('PRODUCTS')
    }
  }) 


  const onChange = (e: any) => {
    const target = e.target;
    const name = target.name;
    setInputValue({
      ...inputValue,
      [name]: target.value
    })
  }
  const onSubmit = (e: any) => {
    e.preventDefault()
    mutationCreate.mutate(inputValue as any)
    navigate('/admin')
    console.log("data");
    toast.success("Thêm sản phẩm thành công rồi =)))")
  }
  return (
    <>
      <div className='flex items-center justify-center min-h-screen'>
        <form className='w-3/5 ' onSubmit={onSubmit}>
          <div className="mb-6">
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Product</label>
            <input type="text" id="text" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
              onChange={onChange} />
          </div>
          <div className="mb-6">
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price Product</label>
            <input type="number" id="text" name='price' onChange={onChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-6">
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Category</label>
            <input type="text" id="text" name='category' onChange={onChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-6">
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Product</label>
            <input type="text" id="text" name='image' onChange={onChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-6">
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description Product</label>
            <input type="text" id="text" name='description' onChange={onChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>

    </>



  )
}

export default CreateProduct
