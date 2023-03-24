import { api } from '@/config'
import { useMutation } from '@tanstack/react-query'

type Arg = {
  messages: {
    role: 'user' | 'assistant'
    content: string
  }[]
}

const fetcher = async (arg: Arg) => {
  const rs = await api.post('/v1/chat/completions', {
    data: {
      model: 'gpt-3.5-turbo',
      messages: arg.messages,
    },
  })
  if (rs.error) {
    throw rs.error
  }
  return rs
}

export const useSendMessageMutation = (onSuccess?: ((arg: any) => void) | undefined) => {
  const fn = useMutation(['useSendMessageMutation'], {
    mutationFn: fetcher,
    onSuccess: (rs) => {
      onSuccess && onSuccess(rs)
    },
    retry: false,
  })
  return { ...fn }
}
