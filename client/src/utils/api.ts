import axios from 'axios'
import type {
  Ambassador,
  AmbassadorFormValues,
  ApiResponse,
  Contact,
  ContactFormValues,
  LoginCredentials,
  LoginResponse,
  Volunteer,
  VolunteerFormValues,
} from '../types'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:5000',
})

const adminTokenKey = 'shecan-admin-token'

export const getAdminToken = () => localStorage.getItem(adminTokenKey)

export const setAdminToken = (token: string) => {
  localStorage.setItem(adminTokenKey, token)
}

export const clearAdminToken = () => {
  localStorage.removeItem(adminTokenKey)
}

const authHeaders = () => {
  const token = getAdminToken()
  return token ? { Authorization: `Bearer ${token}` } : undefined
}

export const submitVolunteer = async (payload: VolunteerFormValues): Promise<Volunteer> => {
  const { data } = await api.post<ApiResponse<Volunteer>>('/api/volunteers', payload)
  return data.data
}

export const submitAmbassador = async (payload: AmbassadorFormValues): Promise<Ambassador> => {
  const { data } = await api.post<ApiResponse<Ambassador>>('/api/ambassadors', payload)
  return data.data
}

export const submitContact = async (payload: ContactFormValues): Promise<Contact> => {
  const { data } = await api.post<ApiResponse<Contact>>('/api/contact', payload)
  return data.data
}

export const loginAdmin = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>('/api/admin/login', credentials)
  return data
}

export const fetchAdminCollection = async <T>(path: string): Promise<T[]> => {
  const { data } = await api.get<{ data: T[] }>(path, { headers: authHeaders() })
  return data.data
}

export const updateAdminRecordStatus = async (path: string) => {
  const { data } = await api.patch(path, null, { headers: authHeaders() })
  return data
}

export const deleteAdminRecord = async (path: string) => {
  const { data } = await api.delete(path, { headers: authHeaders() })
  return data
}

export const downloadAdminCsv = async (path: string, fileName: string) => {
  const response = await api.get(path, { headers: authHeaders(), responseType: 'blob' })
  const blobUrl = window.URL.createObjectURL(new Blob([response.data], { type: 'text/csv' }))
  const anchor = document.createElement('a')
  anchor.href = blobUrl
  anchor.download = fileName
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  window.URL.revokeObjectURL(blobUrl)
}