import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  admin?: {
    id: string;
    email: string;
  };
}

export const auth = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ error: 'No authentication token, access denied' });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    if (!verified) {
      return res.status(401).json({ error: 'Token verification failed, authorization denied' });
    }

    req.admin = verified as { id: string; email: string };
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};