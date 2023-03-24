import { APP_SUPABASE_URL, getAccessToken } from '@/utils'
import { request } from '@umijs/max'

export const getCurrentUser = async () => {
  const token = getAccessToken()
  const rs = await request(`${APP_SUPABASE_URL}/v1/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return rs
}
