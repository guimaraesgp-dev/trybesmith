import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

async function registerProductServices(
  product: ProductInputtableTypes,
): Promise<Product> {
  const newProductServices = await ProductModel.create(product);
  return newProductServices.dataValues;
}

async function findProductServices(): Promise<Product[]> {
  const productsServices = await ProductModel.findAll();
  const allProducts = productsServices.map((p) => p.dataValues);
  return allProducts;
}

export default {
  registerProductServices,
  findProductServices,
};