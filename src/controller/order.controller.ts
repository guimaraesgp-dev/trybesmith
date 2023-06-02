import { Request, Response } from 'express';
import register from '../services/order.services';

async function listOrderControler(_req: Request, res: Response): Promise<Response> {
  const allProducts = await register.listOrderServices();
  return res.status(200).json(allProducts);
}

export default { listOrderControler };
