import { useMemo, useState } from 'react'
import { Avatar, Button, Divider, Drawer, Typography } from 'antd'
import { useGetMessagesQuery, useGetUserInfoQuery } from '@/hooks'
import { faBars, faPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { useWindowSize } from 'usehooks-ts'

type Props = {
  children?: JSX.Element | JSX.Element[]
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const { data: user } = useGetUserInfoQuery()
  const { width } = useWindowSize()
  const { data: messages } = useGetMessagesQuery()
  const [isVisible, setIsVisible] = useState(false)

  console.log('--------------------------------------------------------')
  console.log('messages', messages)
  console.log('--------------------------------------------------------')

  const isMobile = useMemo(() => width < 768, [width])

  return (
    <div className="h-screen flex">
      {isMobile && (
        <div className="flex items-center justify-between fixed w-full h-10 top-0 left-0 bg-gray-900 z-50 px-2">
          <Button onClick={() => setIsVisible(!isVisible)} className="border-0" icon={<FontAwesomeIcon icon={faBars} />} />
          <Button className="border-0" icon={<FontAwesomeIcon icon={faPlus} />} />
        </div>
      )}
      <Drawer
        width={250}
        bodyStyle={{ padding: 0 }}
        closable={false}
        placement="left"
        open={!isMobile ? true : isVisible}
        onClose={() => setIsVisible(false)}
        mask={isMobile}
      >
        <div className="h-full w-full bg-gray-900 p-2 flex flex-col">
          <div className="flex-1"></div>
          <Divider className="border-t-gray-600 my-2" />
          <div className="w-full flex items-center px-4 mb-4">
            <Avatar className="bg-primary mr-2">
              <span className="font-bold uppercase">{user?.data.user?.email?.split('')?.[0]}</span>
            </Avatar>
            <Typography.Paragraph className="mb-0 text-white">{user?.data.user?.email}</Typography.Paragraph>
          </div>
          <div className="w-full h-8 flex items-center px-6 cursor-pointer hover:bg-gray-800 rounded-md text-white">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <div className="ml-2">Log out</div>
          </div>
        </div>
      </Drawer>
      <div className={classNames('flex-1 mt-10 lg:mt-0', !isMobile ? 'ml-[250px]' : 'ml-0')}>{children}</div>
    </div>
  )
}
