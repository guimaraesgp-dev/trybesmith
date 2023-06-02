import { Model, Sequelize } from 'sequelize';
import ModelOrder from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';

async function listOrderServices(): Promise<Model<Order>[]> {
  const allOrderServices = await ModelOrder.findAll({
    attributes: [
      'id', 'userId',
      [Sequelize.literal('JSON_ARRAYAGG(`productIds`.`id`)'), 'productIds'],
    ],
    include: [{
      model: ProductModel,
      attributes: [],
      as: 'productIds', 
    }],
    group: ['Order.id'],
    raw: true,
  });
  return allOrderServices as Model<Order>[];
}

export default {
  listOrderServices,
};