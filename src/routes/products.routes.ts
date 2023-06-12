import { Router } from 'express';
import register from '../controller/products.controller';
import validateProducts from '../middlewares/validateProducts';

const productsRouter = Router();

productsRouter.post(
  '/products', 
  validateProducts.validateName, 
  validateProducts.validatePrice,
  register.registerProductController,
);
productsRouter.get('/products', register.findProductsControler);

export default productsRouter;