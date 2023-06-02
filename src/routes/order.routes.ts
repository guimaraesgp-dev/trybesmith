import { Router } from 'express';
import register from '../controller/order.controller';

const orderRouter = Router();

orderRouter.get('/orders', register.listOrderControler);

export default orderRouter;