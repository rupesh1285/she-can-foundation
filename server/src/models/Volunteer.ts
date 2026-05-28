import mongoose, { Document, Schema } from 'mongoose';

export interface IVolunteer extends Document {
  name: string;
  email: string;
  phone: string;
  city: string;
  contribution: string;
  message?: string;
  status: 'new' | 'reviewed';
}

const VolunteerSchema = new Schema<IVolunteer>({
  name: { type: String, required: true },
  email: { type: String, required: true, index: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  contribution: { type: String, required: true },
  message: { type: String },
  status: { type: String, enum: ['new', 'reviewed'], default: 'new', index: true },
}, { timestamps: true });

export const Volunteer = mongoose.model<IVolunteer>('Volunteer', VolunteerSchema);