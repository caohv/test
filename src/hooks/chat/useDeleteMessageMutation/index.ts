import { message } from 'antd'
import { supabase } from '@/config'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type Arg = {
  id: number
}

export const useDeleteMessageMutation = () => {
  const queryClient = useQueryClient()

  const fetcher = async (arg: Arg) => {
    const rs = await supabase.from('messages').delete().eq('id', arg?.id).select().single()
    if (rs.error) {
      throw rs.error
    }
    return rs
  }

  const fn = useMutation(['useDeleteMessageMutation'], {
    mutationFn: fetcher,
    onSuccess: () => {
      message.success('Message deleted')
      queryClient.refetchQueries(['useGetMessagesQuery'])
    },
    retry: false,
  })
  return { ...fn }
}
