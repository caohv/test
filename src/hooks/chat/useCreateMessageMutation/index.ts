import { supabase } from '@/config'
import { useGetUserInfoQuery } from '@/hooks'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { history } from '@umijs/max'

export const useCreateMessageMutation = () => {
  const queryClient = useQueryClient()
  const { data: user } = useGetUserInfoQuery()

  const fetcher = async () => {
    const rs = await supabase
      .from('messages')
      .insert({
        messages: [],
        userId: user?.data?.user?.id,
      })
      .select()
      .single()

    if (rs.error) {
      throw rs.error
    }
    return rs
  }

  const fn = useMutation(['useCreateMessageMutation'], {
    mutationFn: fetcher,
    onSuccess: (rs) => {
      queryClient.refetchQueries(['useGetMessagesQuery'])
      history.push(`/chat/${rs?.data?.id}`)
    },
    retry: false,
  })
  return { ...fn }
}
