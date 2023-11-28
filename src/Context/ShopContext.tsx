import React, { createContext, useEffect, useState } from 'react'
import all_product from '../components/Assets/all_product'
import {useMutation,useQueryClient,useQuery} from '@tanstack/react-query'
import { IProduct } from '../interface/Product'
import { toast } from 'react-toastify'
import { deleteProducts, getProducts } from '../Admin/api/product'
// import { redirect, useNavigate } from 'react-router-dom'

// const navigate = useNavigate()

export const ShopcontextMain = createContext({} as any)

interface CartContextProps {
    cart: IProduct[];
    addToCart: (item: IProduct) => void;
    removeFromCart: (id: string) => void;
  }

  interface CartItem {
    [itemId: string]: number;
  }
  
  // Function to get the default cart
  const getDefaultCart = (): CartItem => {
    let cart: CartItem = {};
    // Adjust the logic based on your requirements
    return cart;
  };



const ShopContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [cartItems, setCartItems] = useState<CartItem>(getDefaultCart())
   
    console.log("thêm sản phẩm",cartItems);

    console.log('carttiem',cartItems);

  // Function to add an item to the cart
  const addToCart = (itemId: string) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    toast.success("Thêm sản phẩm thành công =)))");
    console.log("Cart:", cartItems);
  };

  // Function to remove an item from the cart
  const removeCart = (itemId: string) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }));
    toast.success("Xóa sản phẩm thành công =)))");
  };
    const queryClient = useQueryClient()
    const { data: products, isLoading, isError } = useQuery({
        queryKey: ['PRODUCTS'],
        queryFn: async () => {
            try {
                const { data } = await getProducts();
                console.log('data', data);
                return data as IProduct[];
            } catch (error) {
                console.error('Error fetching products:', error);
                throw error;
            }
        },
    });
    

    const mutationDelete = useMutation({
        mutationFn: (id:number) => deleteProducts(id),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey:['PRODUCTS']

            })
        }
        
    })

    











    // const [products, setProducts] = useState<IProduct[]>([])
    // const [product, setProduct] = useState<IProduct | null>(null)
    // console.log("product ", products);
    
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const data = await (await fetch(`http://localhost:3000/products`)).json()
    //             console.log(data);
    //             setProducts(data)
    //         } catch (error) {

    //         }
    //     })()
    // }, [])

    // const addProduct = async (product: IProduct) => {
    //     try {
    //         const data = await (await fetch(`http://localhost:3000/products`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(product)
    //         })).json()

    //         console.log("data", data);
    //         setProducts([...products, product])
    //         // navigate('/admin/add-product')
    //         window.location.href = '/admin'
    //     } catch (error) {

    //     }
    // }
    // const getProduct = async (id: number) => {
    //     try {
    //         setProduct(await (await fetch(`http://localhost:3000/products/${id}`)).json())
    //     } catch (error) { }
    // }

    // const updateProduct = async (product: IProduct) => {
    //     try {
    //         const newProduct = await (await fetch(`http://localhost:3000/products/${product.id}`, {
    //             method: 'PATCH',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(product)
    //         })).json()

    //         console.log("data", newProduct);

    //         const data = products.map((product) => (product.id === newProduct.id ? newProduct : product))
    //         setProducts(data)

    //         getProduct(newProduct.id)


    //     } catch (error) {

    //     }
    // }

    // const deleteProduct = async (id: number) => {
    //     try {
    //         await fetch(`http://localhost:3000/products/${id}`, {
    //             method: 'DELETE'
    //         })

    //         const updateProduct = products.filter((product) => product.id !== id)
    //         setProducts(updateProduct)
    //         toast.success("Xóa sản phẩm thành công =))))")
    //     } catch (error) {

    //     }
    // }

    const contextValue = { products, isLoading, isError , queryClient , mutationDelete, addToCart,removeCart, cartItems }
    return (
        <>
            <ShopcontextMain.Provider value={contextValue}>
                {children}
            </ShopcontextMain.Provider>
        </>
    )
}

export default ShopContextProvider
