import UserModel from '../database/models/user.model';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';

const getAll = async ():Promise<object[]> => {
  const orders = await OrderModel.findAll();

  const oneProducts = orders.map(async (order: OrderSequelizeModel): Promise<object> => {
    const { id: orderId } = order.dataValues;
    const { userId } = order.dataValues;

    const twoproducts = await ProductModel.findAll({ where: { orderId } });
    const ids = twoproducts?.map((prod: ProductSequelizeModel): number => {
      const { id: prodId } = prod.dataValues;
      return prodId;
    });

    const orderObj = {
      id: orderId,
      productIds: ids, 
      userId,
    };

    return orderObj;
  });
  const promises = await Promise.all(oneProducts);
  return promises;
};

type Order = {
  userId: number,
  productIds: number[],
};

const newOrder = async ({ userId, productIds }: Order): Promise<string | Order> => {
  const user = await UserModel.findByPk(userId);
  if (!user) return 'notfound';
  const order = await OrderModel.create({ userId });
  const { id: orderId } = order.dataValues;
  await Promise.all(productIds
    .map(async (prodId: number) => { 
      await ProductModel.update({ orderId }, { where: { id: prodId } }); 
    }));
  return { userId, productIds };
};

export default {
  getAll,
  newOrder,
};