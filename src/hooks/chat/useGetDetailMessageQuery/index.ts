import { useCallback, useMemo } from 'react'
import { supabase } from '@/config'
import { useQuery } from '@tanstack/react-query'
import { useMatch } from '@umijs/max'

export const useGetDetailMessageQuery = () => {
  const match = useMatch('/chat/:id')
  const id = useMemo(() => match?.params?.id, [match?.params?.id])

  const fetcher = useCallback(async () => {
    const rs = await supabase.from('messages').select().eq('id', id).single()
    return rs
  }, [id])

  const fn = useQuery(['useGetDetailMessageQuery', id], fetcher, {
    refetchOnWindowFocus: false,
    retry: false,
  })
  return {
    ...fn,
  }
}
