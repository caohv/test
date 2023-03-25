import { useMemo } from 'react'
import { supabase } from '@/config'
import { Message } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { useMatch } from '@umijs/max'

type Arg = {
  messages?: Message[]
}

export const useUpdateMessageMutation = () => {
  const match = useMatch('/chat/:id')
  const id = useMemo(() => match?.params?.id, [match?.params?.id])

  const fetcher = async (arg: Arg) => {
    const rs = await supabase.from('messages').update({ messages: arg?.messages }).eq('id', id).select().single()
    if (rs.error) {
      throw rs.error
    }
    return rs
  }

  const fn = useMutation(['useUpdateMessageMutation'], {
    mutationFn: fetcher,
    onSuccess: () => {
      //
    },
    retry: false,
  })
  return { ...fn }
}
