import express from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = express.Router();

productsRouter.post('/', productsController.registerProduct);
productsRouter.get('/', productsController.findAllProducts);

export default productsRouter;