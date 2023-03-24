import { useState } from 'react'

export default () => {
  const [selectedSectionId, setSelectedSectionId] = useState<string>()

  return {
    selectedSectionId,
    setSelectedSectionId,
  }
}
