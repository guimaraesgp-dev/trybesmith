import jwt from 'jsonwebtoken';

const secret = 'secret';

const auth = (login: object): string => jwt.sign(login, secret);

const verifyAuth = (token: string): unknown => jwt.verify(token, secret);

export default { auth, verifyAuth };