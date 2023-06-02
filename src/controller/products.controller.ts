import { Request, Response } from 'express';
import registerProductServices from '../services/products.services';

async function registerProductController(req: Request, res: Response): Promise<void> {
  const { name, price, orderId } = req.body;
  const productController = await registerProductServices({ 
    name, price, orderId });
  res.status(201).json(productController);
}

export default { registerProductController };