import { api } from '@/lib/axios'

export interface GetProfileResponse {
  phone: string | null
  email: string
  name: string
  id: string
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile(): Promise<GetProfileResponse> {
  const response = await api.get('/me')

  return response.data
}
