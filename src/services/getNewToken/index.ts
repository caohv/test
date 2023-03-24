import { APP_SUPABASE_URL, getRefreshToken, setAccessToken } from '@/utils'
import { request } from '@umijs/max'

export const getNewToken = async () => {
  const refreshToken = getRefreshToken()
  const rs = await request(`${APP_SUPABASE_URL}/v1/`, {
    data: { refresh_token: refreshToken },
    method: 'POST',
  })
  setAccessToken(rs?.access_token)
  return rs
}
