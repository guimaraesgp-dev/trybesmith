import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

async function registerProductServices(
  product: ProductInputtableTypes,
): Promise<Product> {
  const newProductServices = await ProductModel.create(product);
  return newProductServices.dataValues;
}

export default registerProductServices;