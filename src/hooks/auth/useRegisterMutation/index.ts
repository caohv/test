import { message } from 'antd'
import { supabase } from '@/config'
import { AuthError } from '@supabase/supabase-js'
import { useMutation } from '@tanstack/react-query'
import { history } from '@umijs/max'

type Arg = {
  email: string
  password: string
}

export const useRegisterMutation = () => {
  const fetcher = async (arg: Arg) => {
    const { email, password } = arg
    const rs = await supabase.auth.signUp({ email, password })
    if (rs.error) {
      throw rs.error
    }
    return rs
  }

  const fn = useMutation(['useRegisterMutation'], {
    mutationFn: fetcher,
    onSuccess: () => {
      message.success('Register success')
      history.push('/auth/login')
    },
    onError: (error: AuthError) => {
      message.error(error.message)
    },
    retry: false,
  })
  return { ...fn }
}
