import Product from "../models/Product"
import productValidator from "../validate/products"
import productUpdateValidator from "../validate/update";
export const  create = async (req,res) =>{
    try{
        const {error} = productValidator.validate(req.body, {abortEarly:false} )
        if(error) {
            const errors = error.details.map((err) => err.message);

            return res.status(400).json({
                message:errors
            });
        }
        const data = await Product.create(req.body)
        if(!data){
            return res.status(404).json({
                message:"create Product failed"
            })
        }
        return res.status(200).json({
            message:"thanh cong",
            data
        })
    }catch(error){
        return res.status(500).json({
            message:error.message,
        })
    }

}

export const  getAll = async (req,res) =>{
    try{
        const data = await Product.find()
        if(!data || data.length === 0){
            return res.status(404).json({
                message:"Không Tìm Thấy Sản Phẩm"
            })
        }
        return res.status(200).json({
            message:"Gọi sản phẩm thành công",
            data
        })
    }catch(error){
        return res.status(500).json({
            message:error.message,
        })
    }

}
export const  getDetail = async (req,res) =>{
    try{
        const data = await Product.findById(req.params.id)
        if(!data || data.length === 0){
            return res.status(404).json({
                message:"Không Tìm Thấy Sản Phẩm"
            })
        }
        return res.status(200).json({
            message:"Gọi sản phẩm thành công",
            data
        })
    }catch(error){
        return res.status(500).json({
            message:error.message,
        })
    }

}

export const  deleteProduct = async (req,res) =>{
    try{
        const data = await Product.findByIdAndDelete(req.params.id)
        if(!data || data.length === 0){
            return res.status(404).json({
                message:"Xóa sản phẩm thất bại"
            })
        }
        return res.status(200).json({
            message:"Xóa sản phẩm thành công",
            data
        })
    }catch(error){
        return res.status(500).json({
            message:error.message,
        })
    }

}

export const  update = async (req,res) =>{

    try {
        const {error} = productUpdateValidator.validate(req.body, {abortEarly:false} )
        if(error) {
            const errors = error.details.map((err) => err.message);

            return res.status(400).json({
                message:errors
            });
        }
        const data = await Product.findByIdAndUpdate(req.params.id, req.body,{new : true});
        if(!data) {
            return res.status(404).json({
                message: "update Product failed"
            })
        }
        return res.status(200).json({
            message: "Update Thành công",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }

  
}