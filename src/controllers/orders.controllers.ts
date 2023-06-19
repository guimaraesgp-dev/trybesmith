import { Request, Response } from 'express';
import ordersServices from '../services/orders.services';

const allOrders = async (_req: Request, res: Response) => {
  const orders = await ordersServices.getAll();
  return res.status(200).json(orders);
};

const newOrder = async (req: Request, res: Response) => {
  const { body } = req;
  const order = await ordersServices.newOrder(body);
  if (order === 'notfound') {
    return res.status(404).json({ message: '"userId" not found' });
  }

  return res.status(201).json(order);
};

export default { 
  allOrders,
  newOrder,
};