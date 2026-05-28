export interface Volunteer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  contribution: string;
  message?: string;
  status: 'new' | 'reviewed';
  createdAt: string;
}

export interface Ambassador {
  _id: string;
  name: string;
  email: string;
  college: string;
  city: string;
  status: 'new' | 'reviewed';
  createdAt: string;
}

export interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
  status: 'new' | 'reviewed';
  createdAt: string;
}

export interface Admin {
  id?: string;
  _id?: string;
  email: string;
  role: 'master' | 'admin';
}

export interface VolunteerFormValues {
  name: string
  email: string
  phone: string
  city: string
  contribution: string
  message?: string
}

export interface AmbassadorFormValues {
  name: string
  email: string
  college: string
  city: string
}

export interface ContactFormValues {
  name: string
  email: string
  message: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
}

export interface AdminStats {
  totalVolunteers: number
  totalAmbassadors: number
  totalContacts: number
  newToday: number
}