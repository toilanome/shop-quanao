export interface IProduct {
    quantity: number
    _id?: number | string,
    name: string,
    price: number,
    category: string,
    description: string
    image: string

}
export interface User {
    id?: number | string,
    userName: string,
    email:string,
    password:string,
    confirmPassword:string

}