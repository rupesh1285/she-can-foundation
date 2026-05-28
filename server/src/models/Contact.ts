import mongoose, { Document, Schema } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  status: 'new' | 'reviewed';
}

const ContactSchema = new Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String, required: true, index: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['new', 'reviewed'], default: 'new', index: true },
}, { timestamps: true });

export const Contact = mongoose.model<IContact>('Contact', ContactSchema);