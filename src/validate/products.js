import Joi from "joi";

const productValidator = Joi.object({
    name: Joi.string().required().min(6).max(255),
    price: Joi.number().required(),
    category: Joi.string().required(),
    image: Joi.string().required(),
    description: Joi.string(),

    
})


export default productValidator