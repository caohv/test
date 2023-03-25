import { useCallback } from 'react'
import { supabase } from '@/config'
import { useGetUserInfoQuery } from '@/hooks'
import { useQuery } from '@tanstack/react-query'

export const useGetMessagesQuery = () => {
  const { data: user } = useGetUserInfoQuery()

  const fetcher = useCallback(async () => {
    const rs = await supabase.from('messages').select().eq('userId', user?.data?.user?.id)
    return rs
  }, [user?.data?.user?.id])

  const fn = useQuery(['useGetMessagesQuery'], fetcher, {
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !!user?.data?.user?.id,
  })
  return {
    ...fn,
  }
}
