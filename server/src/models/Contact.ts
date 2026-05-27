import mongoose, { Document, Schema } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  status: 'new' | 'reviewed';
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['new', 'reviewed'], default: 'new' },
  createdAt: { type: Date, default: Date.now }
});

export const Contact = mongoose.model<IContact>('Contact', ContactSchema);