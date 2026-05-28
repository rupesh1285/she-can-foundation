import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { AppError } from '../utils/AppError';

export const validate = (schema: ZodSchema<any>) => 
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error: any) {
      if (error && error.errors) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path ? issue.path.join('.') : 'Field'} is ${issue.message}`,
        }));
        res.status(400).json({ status: 'fail', errors: errorMessages });
      } else {
        next(error);
      }
    }
  };
