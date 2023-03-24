import { useState } from 'react'

export default () => {
  const [selectedElementId, setSelectedElementId] = useState<string>()

  return {
    selectedElementId,
    setSelectedElementId,
  }
}
