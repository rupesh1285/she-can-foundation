import { z } from 'zod';

export const volunteerSchema = z.object({
  body: z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits").max(15),
    city: z.string().min(2, "City is required").max(100),
    contribution: z.string().min(2, "Contribution must be at least 2 characters").max(1000),
    message: z.string().max(2000).optional(),
  })
});

export const ambassadorSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    phone: z.string().min(10).max(15),
    college: z.string().min(2).max(200),
    year: z.string().min(1).max(50),
    whyJoin: z.string().min(10).max(2000),
  })
});

export const contactSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    message: z.string().min(5).max(2000),
  })
});

export const loginSchema = z.object({
  body: z.object({
    username: z.string().min(3).max(50),
    password: z.string().min(6).max(100),
  })
});
