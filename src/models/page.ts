import { useState } from 'react'
import { Page } from '@/types'

export default () => {
  const [page, setPage] = useState<Page | null>()
  const [selectedPageId, setSelectedPageId] = useState()

  return {
    page,
    setPage,

    selectedPageId,
    setSelectedPageId,
  }
}
