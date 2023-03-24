import { supabase } from '@/config'
import { useQuery } from '@tanstack/react-query'

export const fetcher = async () => {
  const rs = await supabase.auth.getUser()
  if (rs.error) {
    throw rs.error
  }
  return rs
}

export const useGetUserInfoQuery = () => {
  const fn = useQuery(['useGetUserInfoQuery'], fetcher, {
    refetchOnWindowFocus: false,
    retry: false,
  })
  return {
    ...fn,
  }
}
