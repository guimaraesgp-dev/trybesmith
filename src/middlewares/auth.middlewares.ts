import { NextFunction, Request, Response } from 'express';
import auth from '../auth/auth';

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    auth.verifyAuth(authorization);
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default { validateLogin };