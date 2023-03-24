import { useState } from 'react'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import en_US from 'antd/es/locale/en_US'

type Props = {
  children?: JSX.Element | JSX.Element[]
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ConfigProvider locale={en_US}>
      {/* NOTE: config ant style priority to higher than tailwind */}
      <StyleProvider hashPriority="high">
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </StyleProvider>
    </ConfigProvider>
  )
}
