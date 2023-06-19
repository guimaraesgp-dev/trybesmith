import { Request, Response } from 'express';
import loginServices from '../services/login.services';
import auth from '../auth/auth';

const loginV = async (req: Request, res: Response) => {
  const login = await loginServices.loginV(req.body);
  if (!login) return res.status(401).json({ message: 'Username or password invalid' });
  const token = auth.auth(login.dataValues);
  return res.status(200).json({ token });
};

export default { 
  loginV,
};