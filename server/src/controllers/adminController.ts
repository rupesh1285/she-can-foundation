import { Request, Response, NextFunction } from 'express';
import { Volunteer } from '../models/Volunteer';
import { Ambassador } from '../models/Ambassador';
import { Contact } from '../models/Contact';
import asyncHandler from 'express-async-handler';
import { AppError } from '../utils/AppError';

export const getVolunteers = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const volunteers = await Volunteer.find().sort({ createdAt: -1 });
  res.json(volunteers);
});

export const getAmbassadors = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const ambassadors = await Ambassador.find().sort({ createdAt: -1 });
  res.json(ambassadors);
});

export const getContacts = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
});

// Generic toggle status
export const toggleStatus = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { type, id } = req.params;
  const { status } = req.body;
  
  let model;
  switch (type) {
    case 'volunteer': model = Volunteer; break;
    case 'ambassador': model = Ambassador; break;
    case 'contact': model = Contact; break;
    default: return next(new AppError('Invalid submission type', 400));
  }

  const item = await model.findByIdAndUpdate(id, { status }, { new: true });
  if (!item) {
    return next(new AppError('Item not found', 404));
  }
  
  res.json({ message: 'Status updated successfully', item });
});

export const deleteSubmission = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { type, id } = req.params;
  
  let model;
  switch (type) {
    case 'volunteer': model = Volunteer; break;
    case 'ambassador': model = Ambassador; break;
    case 'contact': model = Contact; break;
    default: return next(new AppError('Invalid submission type', 400));
  }

  const item = await model.findByIdAndDelete(id);
  if (!item) {
    return next(new AppError('Item not found', 404));
  }

  res.json({ message: 'Item deleted successfully' });
});
