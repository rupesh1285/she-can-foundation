import mongoose, { Document, Schema } from 'mongoose';

export interface IAmbassador extends Document {
  name: string;
  email: string;
  college: string;
  city: string;
  status: 'new' | 'reviewed';
  createdAt: Date;
}

const AmbassadorSchema = new Schema<IAmbassador>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  college: { type: String, required: true },
  city: { type: String, required: true },
  status: { type: String, enum: ['new', 'reviewed'], default: 'new' },
  createdAt: { type: Date, default: Date.now }
});

export const Ambassador = mongoose.model<IAmbassador>('Ambassador', AmbassadorSchema);