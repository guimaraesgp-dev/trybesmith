import bcrypt from 'bcryptjs';
import UserModel, { UserSequelizeModel } from '../database/models/user.model';
import { User } from '../types/User';

const loginV = async ({ username, password }: User): Promise<UserSequelizeModel | null> => {
  const login = await UserModel.findOne({ where: { username } });
  if (!login || !bcrypt.compareSync(password, login.dataValues.password)) {
    return null;
  }
  return login;
};

export default { 
  loginV,
};