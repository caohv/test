import { useMemo } from 'react'
import { useLocation } from '@umijs/max'

export const useQueryUrl = () => {
  const { search } = useLocation()

  const query = useMemo(() => new URLSearchParams(search), [search])

  return {
    query,
  }
}
