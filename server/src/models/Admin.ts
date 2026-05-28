import mongoose, { Document, Schema } from 'mongoose';

export interface IAdmin extends Document {
  email: string;
  password: string;
  role: 'master' | 'admin';
}

const AdminSchema = new Schema<IAdmin>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['master', 'admin'], default: 'admin' }
});

export const Admin = mongoose.model<IAdmin>('Admin', AdminSchema);