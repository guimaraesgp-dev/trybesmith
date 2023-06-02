import { Router } from 'express';
import registerProductController from '../controller/products.controller';

const productsRouter = Router();

productsRouter.post('/products', registerProductController.registerProductController);

export default productsRouter;