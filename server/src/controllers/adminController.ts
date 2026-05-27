import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Admin } from '../models/Admin';
import { Volunteer } from '../models/Volunteer';
import { Ambassador } from '../models/Ambassador';
import { Contact } from '../models/Contact';
import { AuthRequest } from '../middleware/auth';

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    
    if (!admin) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '24h' }
    );
    
    res.json({ token, admin: { id: admin._id, email: admin.email } });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Generic CRUD methods for admin
export const getVolunteers = async (req: AuthRequest, res: Response) => {
  try {
    const data = await Volunteer.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
};

export const getAmbassadors = async (req: AuthRequest, res: Response) => {
  try {
    const data = await Ambassador.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
};

export const getContacts = async (req: AuthRequest, res: Response) => {
  try {
    const data = await Contact.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
};

export const updateVolunteerStatus = async (req: AuthRequest, res: Response) => {
  try {
    const item = await Volunteer.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    item.status = item.status === 'new' ? 'reviewed' : 'new';
    await item.save();
    res.json(item);
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
};

export const updateAmbassadorStatus = async (req: AuthRequest, res: Response) => {
  try {
    const item = await Ambassador.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    item.status = item.status === 'new' ? 'reviewed' : 'new';
    await item.save();
    res.json(item);
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
};

export const updateContactStatus = async (req: AuthRequest, res: Response) => {
  try {
    const item = await Contact.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    item.status = item.status === 'new' ? 'reviewed' : 'new';
    await item.save();
    res.json(item);
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
};

export const deleteVolunteer = async (req: AuthRequest, res: Response) => {
  try {
    await Volunteer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
};

export const deleteAmbassador = async (req: AuthRequest, res: Response) => {
  try {
    await Ambassador.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
};

export const deleteContact = async (req: AuthRequest, res: Response) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
};

// CSV Exports
export const exportVolunteers = async (req: AuthRequest, res: Response) => {
  try {
    const data = await Volunteer.find().lean();
    if (!data.length) return res.status(400).json({ error: 'No data to export' });
    
    const headers = Object.keys(data[0]).filter(k => k !== '_id' && k !== '__v');
    const csv = [
      headers.join(','),
      ...data.map(row => headers.map(header => JSON.stringify((row as any)[header] || '')).join(','))
    ].join('\n');
    
    res.header('Content-Type', 'text/csv');
    res.attachment('volunteers.csv');
    res.send(csv);
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
};

export const exportAmbassadors = async (req: AuthRequest, res: Response) => {
  try {
    const data = await Ambassador.find().lean();
    if (!data.length) return res.status(400).json({ error: 'No data to export' });
    
    const headers = Object.keys(data[0]).filter(k => k !== '_id' && k !== '__v');
    const csv = [
      headers.join(','),
      ...data.map(row => headers.map(header => JSON.stringify((row as any)[header] || '')).join(','))
    ].join('\n');
    
    res.header('Content-Type', 'text/csv');
    res.attachment('ambassadors.csv');
    res.send(csv);
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
};

export const exportContacts = async (req: AuthRequest, res: Response) => {
  try {
    const data = await Contact.find().lean();
    if (!data.length) return res.status(400).json({ error: 'No data to export' });
    
    const headers = Object.keys(data[0]).filter(k => k !== '_id' && k !== '__v');
    const csv = [
      headers.join(','),
      ...data.map(row => headers.map(header => JSON.stringify((row as any)[header] || '')).join(','))
    ].join('\n');
    
    res.header('Content-Type', 'text/csv');
    res.attachment('contacts.csv');
    res.send(csv);
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
};
