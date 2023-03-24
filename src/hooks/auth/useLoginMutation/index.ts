import { message } from 'antd'
import { supabase } from '@/config'
import { AuthError } from '@supabase/supabase-js'
import { useMutation } from '@tanstack/react-query'
import { history } from '@umijs/max'

type Arg = {
  email: string
  password: string
}

export const useLoginMutation = () => {
  const fetcher = async (arg: Arg) => {
    const { email, password } = arg
    const rs = await supabase.auth.signInWithPassword({ email, password })
    if (rs.error) {
      throw rs.error
    }
    return rs
  }

  const fn = useMutation(['useLoginMutation'], {
    mutationFn: fetcher,
    onSuccess: () => {
      message.success('Login success')
      history.push('/')
    },
    onError: (error: AuthError) => {
      message.error(error.message)
    },
    retry: false,
  })
  return { ...fn }
}
