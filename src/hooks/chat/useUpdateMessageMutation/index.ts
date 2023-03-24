import { useMemo } from 'react'
import { supabase } from '@/config'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMatch } from '@umijs/max'

export const useUpdateMessageMutation = () => {
  const queryClient = useQueryClient()
  const match = useMatch('/web-builder/:layoutId')
  const layoutId = useMemo(() => match?.params?.layoutId, [match?.params?.layoutId])

  const fetcher = async () => {
    const rs = await supabase.from('messages').insert({
      name: 'New Page',
      layoutId,
      sections: [],
      elements: [],
    })
    if (rs.error) {
      throw rs.error
    }
    return rs
  }

  const fn = useMutation(['useUpdateMessageMutation'], {
    mutationFn: fetcher,
    onSuccess: () => {
      queryClient.refetchQueries(['useGetListPageQuery'])
    },
    retry: false,
  })
  return { ...fn }
}
