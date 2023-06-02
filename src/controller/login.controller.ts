import { Request, Response } from 'express';
import loginService from '../services/login.services';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  const loginResponse = await loginService.login(username, password);

  return res.status(loginResponse.status).json(loginResponse.message);
}

export default {
  login,
};