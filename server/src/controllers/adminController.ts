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

// Map to store active admin SSE connections
const activeAdmins = new Map<string, Response>();

// Login
export const login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  
  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    return next(new AppError('Invalid credentials', 401));
  }

  const token = jwt.sign({ id: admin._id, email: admin.email, role: admin.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
  res.json({ token, admin: { email: admin.email, role: admin.role } });
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

// CSV Helper
const sendCSV = (res: Response, filename: string, data: any[], fields: { label: string, value: string }[]) => {
  const header = fields.map(f => `"${f.label}"`).join(',');
  const rows = data.map(row => {
    return fields.map(f => {
      let val = row[f.value] || '';
      if (val instanceof Date) val = val.toISOString();
      val = String(val).replace(/"/g, '""'); // escape quotes
      return `"${val}"`;
    }).join(',');
  });
  
  const csv = [header, ...rows].join('\n');
  
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', `attachment; filename=${filename}-${new Date().toISOString().split('T')[0]}.csv`);
  res.status(200).send(csv);
};

// Exports
export const exportVolunteers = asyncHandler(async (req, res) => {
  const data = await Volunteer.find().sort({ createdAt: -1 });
  sendCSV(res, 'volunteers', data, [
    { label: 'Name', value: 'name' },
    { label: 'Email', value: 'email' },
    { label: 'Phone', value: 'phone' },
    { label: 'City', value: 'city' },
    { label: 'Contribution', value: 'contribution' },
    { label: 'Message', value: 'message' },
    { label: 'Status', value: 'status' },
    { label: 'Date', value: 'createdAt' }
  ]);
});

export const exportAmbassadors = asyncHandler(async (req, res) => {
  const data = await Ambassador.find().sort({ createdAt: -1 });
  sendCSV(res, 'ambassadors', data, [
    { label: 'Name', value: 'name' },
    { label: 'Email', value: 'email' },
    { label: 'Phone', value: 'phone' },
    { label: 'College', value: 'college' },
    { label: 'Year', value: 'year' },
    { label: 'Why Join', value: 'whyJoin' },
    { label: 'Status', value: 'status' },
    { label: 'Date', value: 'createdAt' }
  ]);
});

export const exportContacts = asyncHandler(async (req, res) => {
  const data = await Contact.find().sort({ createdAt: -1 });
  sendCSV(res, 'messages', data, [
    { label: 'Name', value: 'name' },
    { label: 'Email', value: 'email' },
    { label: 'Message', value: 'message' },
    { label: 'Status', value: 'status' },
    { label: 'Date', value: 'createdAt' }
  ]);
});

// Admin Management (Master Only)
export const getAdmins = asyncHandler(async (req: Request, res: Response) => {
  const admins = await Admin.find().select('-password');
  res.json(admins);
});

export const createAdmin = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const existing = await Admin.findOne({ email });
  if (existing) return next(new AppError('Email already exists', 400));
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const admin = new Admin({ email, password: hashedPassword, role: 'admin' });
  await admin.save();
  
  res.status(201).json({ message: 'Admin created', admin: { id: admin._id, email: admin.email, role: admin.role } });
});

export const deleteAdmin = asyncHandler(async (req: any, res: Response, next: NextFunction) => {
  if (req.admin.id === req.params.id) {
    return next(new AppError('Cannot delete yourself', 400));
  }
  const admin = await Admin.findByIdAndDelete(req.params.id);
  if (!admin) return next(new AppError('Not found', 404));
  
  // If the deleted admin is currently connected, force logout
  const targetId = admin._id.toString();
  if (activeAdmins.has(targetId)) {
    const activeRes = activeAdmins.get(targetId);
    activeRes?.write(`data: ${JSON.stringify({ action: 'force_logout' })}\n\n`);
    activeRes?.end();
    activeAdmins.delete(targetId);
  }

  res.json({ message: 'Admin deleted' });
});

// SSE Endpoint for real-time admin events
export const streamAdmins = (req: any, res: Response) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const adminId = req.admin.id;
  activeAdmins.set(adminId, res);

  req.on('close', () => {
    activeAdmins.delete(adminId);
  });
};
