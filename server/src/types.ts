import type { Request } from 'express'

export type SubmissionStatus = 'new' | 'reviewed'

export interface AuthRequest extends Request {
  user?: {
    adminId: string
    email: string
  }
}
