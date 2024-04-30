import { api } from '@/lib/axios'

export interface RegisterRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  email,
  restaurantName,
  managerName,
  phone,
}: RegisterRestaurantBody) {
  await api.post('/authenticate', { email, restaurantName, managerName, phone })
}

// export async function registerRestaurant({body}: RegisterRestaurantBody) {
//   await api.post('/authenticate', { body })
// }
