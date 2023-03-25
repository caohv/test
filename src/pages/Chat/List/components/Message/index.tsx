import { useMemo } from 'react'
import { Avatar } from 'antd'
import { LOGO } from '@/assets'
import { useGetUserInfoQuery } from '@/hooks'
import MarkdownPreview from '@uiw/react-markdown-preview'
import classNames from 'classnames'

type Props = {
  message: {
    role: 'user' | 'assistant'
    content: string
  }
}

export const Message: React.FC<Props> = ({ message }) => {
  const { data: user } = useGetUserInfoQuery()

  const isUser = useMemo(() => message?.role === 'user', [message])

  return (
    <div className="flex items-start mt-4 w-full relative">
      <div className="absolute top-0 -left-[28px] lg:-left-24px">
        <Avatar
          size="small"
          className={classNames('flex items-center justify-center', isUser ? 'bg-green-100' : 'bg-orange-200')}
        >
          {isUser ? (
            <span className="font-bold uppercase text-black">{user?.data?.user?.email?.split('')?.[0]}</span>
          ) : (
            <img src={LOGO} className="w-8" />
          )}
        </Avatar>
      </div>
      <div className="border bg-gray-50 p-2 rounded-lg flex-1 w-full">
        <MarkdownPreview disableCopy source={message?.content} className="bg-gray-50" />
      </div>
    </div>
  )
}
