import { Request, Response } from 'express';
import { Volunteer } from '../models/Volunteer';
import { Ambassador } from '../models/Ambassador';
import { Contact } from '../models/Contact';

export const saveVolunteer = async (req: Request, res: Response) => {
  try {
    const volunteer = new Volunteer(req.body);
    await volunteer.save();
    res.status(201).json(volunteer);
  } catch (error) {
    res.status(400).json({ error: 'Error saving volunteer application' });
  }
};

export const saveAmbassador = async (req: Request, res: Response) => {
  try {
    const ambassador = new Ambassador(req.body);
    await ambassador.save();
    res.status(201).json(ambassador);
  } catch (error) {
    res.status(400).json({ error: 'Error saving ambassador application' });
  }
};

export const saveContact = async (req: Request, res: Response) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ error: 'Error saving contact message' });
  }
};
