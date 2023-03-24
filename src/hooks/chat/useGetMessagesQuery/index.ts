import { useCallback } from 'react'
import { supabase } from '@/config'
import { useQuery } from '@tanstack/react-query'

export const useGetMessagesQuery = () => {
  const fetcher = useCallback(async () => {
    const rs = await supabase.from('messages').select()
    return rs
  }, [])

  const fn = useQuery(['useGetMessagesQuery'], fetcher, {
    refetchOnWindowFocus: false,
    retry: false,
  })
  return {
    ...fn,
  }
}
