import { Request, Response, NextFunction } from 'express';
import { Volunteer } from '../models/Volunteer';
import { Ambassador } from '../models/Ambassador';
import { Contact } from '../models/Contact';
import { Admin } from '../models/Admin';
import asyncHandler from 'express-async-handler';
import { AppError } from '../utils/AppError';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Model } from 'mongoose';

// Login
export const login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  
  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    return next(new AppError('Invalid credentials', 401));
  }

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
  res.json({ token, admin: { email: admin.email } });
});

// GET endpoints
export const getVolunteers = asyncHandler(async (req, res) => { res.json(await Volunteer.find().sort({ createdAt: -1 })); });
export const getAmbassadors = asyncHandler(async (req, res) => { res.json(await Ambassador.find().sort({ createdAt: -1 })); });
export const getContacts = asyncHandler(async (req, res) => { res.json(await Contact.find().sort({ createdAt: -1 })); });

// Update status
const updateStatus = (model: Model<any>) => asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const item = await model.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  if (!item) return next(new AppError('Not found', 404));
  res.json({ item });
});
export const updateVolunteerStatus = updateStatus(Volunteer);
export const updateAmbassadorStatus = updateStatus(Ambassador);
export const updateContactStatus = updateStatus(Contact);

// Delete
const deleteItem = (model: Model<any>) => asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const item = await model.findByIdAndDelete(req.params.id);
  if (!item) return next(new AppError('Not found', 404));
  res.json({ message: 'Deleted' });
});
export const deleteVolunteer = deleteItem(Volunteer);
export const deleteAmbassador = deleteItem(Ambassador);
export const deleteContact = deleteItem(Contact);

// Exports
export const exportVolunteers = asyncHandler(async (req, res) => { res.json(await Volunteer.find()); });
export const exportAmbassadors = asyncHandler(async (req, res) => { res.json(await Ambassador.find()); });
export const exportContacts = asyncHandler(async (req, res) => { res.json(await Contact.find()); });
