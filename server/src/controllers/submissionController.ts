import type { Request, Response } from 'express'
import { Model } from 'mongoose'
import { Ambassador } from '../models/Ambassador'
import { Contact } from '../models/Contact'
import { Volunteer } from '../models/Volunteer'

const updateStatus = async (collection: Model<any>, id: string, res: Response) => {
  const item = await collection.findById(id)

  if (!item) {
    return res.status(404).json({ message: 'Record not found' })
  }

  item.status = item.status === 'new' ? 'reviewed' : 'new'
  await item.save()

  return res.json({ message: 'Status updated', data: item })
}

const deleteRecord = async (collection: Model<any>, id: string, res: Response) => {
  const deleted = await collection.findByIdAndDelete(id)

  if (!deleted) {
    return res.status(404).json({ message: 'Record not found' })
  }

  return res.json({ message: 'Deleted successfully' })
}

const toCsv = (rows: Array<Record<string, unknown>>) => {
  if (rows.length === 0) {
    return ''
  }

  const headers = Object.keys(rows[0] ?? {})
  const escape = (value: unknown) => `"${String(value ?? '').replace(/"/g, '""')}"`

  return [headers.join(','), ...rows.map((row) => headers.map((header) => escape(row[header])).join(','))].join('\n')
}

export const submitVolunteer = async (req: Request, res: Response) => {
  try {
    const volunteer = await Volunteer.create(req.body)
    return res.status(201).json({ message: 'Volunteer application received', data: volunteer })
  } catch {
    return res.status(400).json({ message: 'Failed to save volunteer application' })
  }
}

export const submitAmbassador = async (req: Request, res: Response) => {
  try {
    const ambassador = await Ambassador.create(req.body)
    return res.status(201).json({ message: 'Ambassador application received', data: ambassador })
  } catch {
    return res.status(400).json({ message: 'Failed to save ambassador application' })
  }
}

export const submitContact = async (req: Request, res: Response) => {
  try {
    const contact = await Contact.create(req.body)
    return res.status(201).json({ message: 'Message received', data: contact })
  } catch {
    return res.status(400).json({ message: 'Failed to save message' })
  }
}

export const getVolunteers = async (_req: Request, res: Response) => {
  const data = await Volunteer.find().sort({ createdAt: -1 })
  return res.json({ data })
}

export const getAmbassadors = async (_req: Request, res: Response) => {
  const data = await Ambassador.find().sort({ createdAt: -1 })
  return res.json({ data })
}

export const getContacts = async (_req: Request, res: Response) => {
  const data = await Contact.find().sort({ createdAt: -1 })
  return res.json({ data })
}

export const toggleVolunteerStatus = async (req: Request, res: Response) => {
  const id = String(req.params.id)
  return updateStatus(Volunteer, id, res)
}

export const toggleAmbassadorStatus = async (req: Request, res: Response) => {
  const id = String(req.params.id)
  return updateStatus(Ambassador, id, res)
}

export const toggleContactStatus = async (req: Request, res: Response) => {
  const id = String(req.params.id)
  return updateStatus(Contact, id, res)
}

export const deleteVolunteer = async (req: Request, res: Response) => {
  const id = String(req.params.id)
  return deleteRecord(Volunteer, id, res)
}

export const deleteAmbassador = async (req: Request, res: Response) => {
  const id = String(req.params.id)
  return deleteRecord(Ambassador, id, res)
}

export const deleteContact = async (req: Request, res: Response) => {
  const id = String(req.params.id)
  return deleteRecord(Contact, id, res)
}

export const exportVolunteersCsv = async (_req: Request, res: Response) => {
  const data = await Volunteer.find().sort({ createdAt: -1 }).lean()
  const csv = toCsv(data as Array<Record<string, unknown>>)
  res.header('Content-Type', 'text/csv')
  res.attachment('volunteers.csv')
  return res.send(csv)
}

export const exportAmbassadorsCsv = async (_req: Request, res: Response) => {
  const data = await Ambassador.find().sort({ createdAt: -1 }).lean()
  const csv = toCsv(data as Array<Record<string, unknown>>)
  res.header('Content-Type', 'text/csv')
  res.attachment('ambassadors.csv')
  return res.send(csv)
}

export const exportContactsCsv = async (_req: Request, res: Response) => {
  const data = await Contact.find().sort({ createdAt: -1 }).lean()
  const csv = toCsv(data as Array<Record<string, unknown>>)
  res.header('Content-Type', 'text/csv')
  res.attachment('contacts.csv')
  return res.send(csv)
}
