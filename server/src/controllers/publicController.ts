import { Request, Response, NextFunction } from 'express';
import { Volunteer } from '../models/Volunteer';
import { Ambassador } from '../models/Ambassador';
import { Contact } from '../models/Contact';
import asyncHandler from 'express-async-handler';
import { AppError } from '../utils/AppError';

export const submitVolunteer = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const volunteer = new Volunteer(req.body);
  await volunteer.save();
  res.status(201).json({ message: 'Volunteer application submitted successfully' });
});

export const submitAmbassador = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const ambassador = new Ambassador(req.body);
  await ambassador.save();
  res.status(201).json({ message: 'Campus Ambassador application submitted successfully' });
});

export const submitContact = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).json({ message: 'Message sent successfully' });
});
