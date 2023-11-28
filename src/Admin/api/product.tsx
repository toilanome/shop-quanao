import { IProduct } from "../../interface/Product";
import instance from "./instance"
export const getProducts = () =>{
    return instance.get('/');
}
export const CreateProducts = (product :IProduct) =>{
    return instance.post('/create/' , product);
}
export const updateProducts = (product:IProduct) =>{
    return instance.patch('/' + product._id + '/edit' , product)
}
export const deleteProducts = (_id:number | string) =>{
    return instance.delete(`/` + _id )
}
export const getDetail = (_id:number | string) =>{
    return instance.delete(`/` + _id )
}
