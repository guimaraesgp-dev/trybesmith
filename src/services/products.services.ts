import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';

const createProducts = async ({ name, price, orderId }: Product):Promise<Product> => {
  const prod = await ProductModel.create({ name, price, orderId });
  return prod.dataValues;
};

const getAllProducts = async ():Promise<object[]> => {
  const prods = await ProductModel.findAll();
  return prods;
};

export default { 
  createProducts,
  getAllProducts,
};