import Joi from "joi";

const productUpdateValidator = Joi.object({
    name: Joi.string().min(6).max(255),
    price: Joi.number(),
    category: Joi.string(),
    image: Joi.string(),
    description: Joi.string(),

})
export default productUpdateValidator