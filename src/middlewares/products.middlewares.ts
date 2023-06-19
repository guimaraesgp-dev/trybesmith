import { NextFunction, Request, Response } from 'express';

type NewType = Promise<Response>;

const validateName = async (req: Request, res: Response, next: NextFunction): NewType => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (typeof name !== 'string') return res.status(422).json({ message: '"name" must be a string' });
  if (name.length < 3) {
    return res.status(422)
      .json({ message: '"name" length must be at least 3 characters long' });
  }

  next();
  return res.status(200);
};

const validatePrice = async (req: Request, res: Response, next: NextFunction): NewType => {
  const { price } = req.body;
  if (!price) return res.status(400).json({ message: '"price" is required' });
  if (typeof price !== 'string') {
    return res.status(422)
      .json({ message: '"price" must be a string' });
  }
  if (price.length < 3) {
    return res.status(422)
      .json({ message: '"price" length must be at least 3 characters long' });
  }

  next();
  return res.status(200);
};

export default { validateName, validatePrice };