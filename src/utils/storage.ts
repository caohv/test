import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/utils'

export const setItem = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, value)
  }
}

export const getItem = (key: string) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key) || ''
  }
  return ''
}

export const setAccessToken = (value: string) => {
  setItem(ACCESS_TOKEN, value)
}

export const getAccessToken = () => getItem(ACCESS_TOKEN)

export const setRefreshToken = (value: string) => {
  setItem(REFRESH_TOKEN, value)
}

export const getRefreshToken = () => getItem(REFRESH_TOKEN)

export const clearAll = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(ACCESS_TOKEN)
    window.localStorage.removeItem(REFRESH_TOKEN)
  }
}
