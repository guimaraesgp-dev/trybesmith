import { Request, Response } from 'express';
import register from '../services/products.services';

async function registerProductController(req: Request, res: Response): Promise<void> {
  const { name, price, orderId } = req.body;
  const productController = await register.registerProductServices({ 
    name, price, orderId });
  res.status(201).json(productController);
}

async function findProductsControler(_req: Request, res: Response): Promise<Response> {
  const allProducts = await register.findProductServices();
  return res.status(200).json(allProducts);
}

export default { 
  registerProductController,
  findProductsControler,
};