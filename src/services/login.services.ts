import bcrypt from 'bcryptjs';
import jwtUtils from '../auth/jwtUtils';
import UserModel from '../database/models/user.model';

type Response = {
  status: number;
  message: { token: string } | { message: string };
};

async function login(username: string, password: string): Promise<Response> {
  const user = await UserModel.findOne({ where: { username } });

  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return { status: 401, message: { message: 'Username or password invalid' } };
  }

  const token = jwtUtils.sign({ id: user.dataValues.id, user: user.dataValues.username });

  return { status: 200, message: { token } };
}

export default {
  login,
};