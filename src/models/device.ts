import { useState } from 'react'
import { DeviceType } from '@/types'

export default () => {
  const [deviceType, setDeviceType] = useState<DeviceType>(DeviceType.Desktop)

  return {
    deviceType,
    setDeviceType,
  }
}
