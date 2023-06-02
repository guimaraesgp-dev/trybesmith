import { Router } from 'express';
import register from '../controller/products.controller';

const productsRouter = Router();

productsRouter.post('/products', register.registerProductController);
productsRouter.get('/products', register.findProductsControler);

export default productsRouter;