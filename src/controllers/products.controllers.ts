import { Request, Response } from 'express';
import productServices from '../services/products.services';

const createProducts = async (req: Request, res: Response): Promise<Response> => {
  const addProd = req.body;
  const prod = await productServices.createProducts(addProd);
  return res.status(201).json(prod);
};

const allProducts = async (_req: Request, res: Response): Promise<Response> => {
  const prods = await productServices.getAllProducts();
  return res.status(200).json(prods);
};

export default { 
  createProducts,
  allProducts,
};