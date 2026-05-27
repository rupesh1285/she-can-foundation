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
  id: string;
  email: string;
}