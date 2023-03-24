import { useState } from 'react'

export default () => {
  const [isLoadingBuilderGlobal, setIsLoadingBuilderGlobal] = useState(false)

  return {
    isLoadingBuilderGlobal,
    setIsLoadingBuilderGlobal,
  }
}
