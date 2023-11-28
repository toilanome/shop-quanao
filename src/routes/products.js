import { Router } from "express";
import { create, deleteProduct, getAll, getDetail, update } from "../controllers/products";
const productRouter = Router()
productRouter.get('/',getAll);
productRouter.post('/create',create);
productRouter.get('/:id',getDetail);
productRouter.patch('/:id/edit',update);
productRouter.delete('/:id',deleteProduct);

export default productRouter;