import { useState } from 'react'
import { Layout } from '@/types'

export default () => {
  const [layout, setLayout] = useState<Layout | null>()

  return {
    layout,
    setLayout,
  }
}
