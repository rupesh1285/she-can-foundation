import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';

import publicRoutes from './routes/public';
import adminRoutes from './routes/admin';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();

// 1. Security Middleware
app.use(helmet());

// 2. CORS configurations
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5174', // Default to 5174 based on vite running there
  credentials: true
}));

// 3. Rate Limiting for public API to prevent spam
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

// Apply rate limiter to all API routes
app.use('/api/', apiLimiter);

// 4. Logging
app.use(morgan('dev'));

// 5. Body Parsing
app.use(express.json({ limit: '10kb' })); // Limit body size to prevent overload

// Routes
app.use('/api', publicRoutes);
app.use('/api/admin', adminRoutes);

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI as string;

// Prevent mongoose deprecation warnings
mongoose.set('strictQuery', false);

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB Successfully');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });