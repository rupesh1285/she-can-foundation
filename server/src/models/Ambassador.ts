import mongoose, { Document, Schema } from 'mongoose';

export interface IAmbassador extends Document {
  name: string;
  email: string;
  phone: string;
  college: string;
  year: string;
  whyJoin: string;
  status: 'new' | 'reviewed';
}

const AmbassadorSchema = new Schema<IAmbassador>({
  name: { type: String, required: true },
  email: { type: String, required: true, index: true },
  phone: { type: String, required: true },
  college: { type: String, required: true, index: true },
  year: { type: String, required: true },
  whyJoin: { type: String, required: true },
  status: { type: String, enum: ['new', 'reviewed'], default: 'new', index: true },
}, { timestamps: true });

export const Ambassador = mongoose.model<IAmbassador>('Ambassador', AmbassadorSchema);