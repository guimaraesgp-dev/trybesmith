import { Request, Response } from 'express';
import productsService from '../service/products.service';

async function registerProduct(req: Request, res: Response) {
  const { name, price, orderId } = req.body;
  const newProduct = await productsService.registerProduct({ name, price, orderId });
  res.status(201).json(newProduct);
}

async function findAllProducts(_req: Request, res: Response) {
  const allProducts = await productsService.findAllProducts();
  res.status(200).json(allProducts);
}

export default {
  registerProduct,
  findAllProducts,
};