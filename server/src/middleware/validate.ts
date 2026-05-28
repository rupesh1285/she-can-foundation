import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { AppError } from '../utils/AppError';

export const validate = (schema: ZodSchema<any>) => 
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error: any) {
      if (error && (error.name === 'ZodError' || error.issues)) {
        const issues = error.issues || error.errors || [];
        const errorMessages = issues.map((issue: any) => ({
          message: `${issue.path && issue.path[1] ? issue.path[1] : 'Field'}: ${issue.message}`,
        }));
        res.status(400).json({ status: 'fail', message: errorMessages[0].message, errors: errorMessages });
      } else {
        next(error);
      }
    }
  };
