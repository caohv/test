import { Avatar, Dropdown, Space, Typography } from 'antd'
import { LOGO } from '@/assets'
import { useGetUserInfoQuery } from '@/hooks'
import { history } from '@umijs/max'

type Props = {}

export const Header: React.FC<Props> = () => {
  const { data: user } = useGetUserInfoQuery()
  return (
    <div className="flex h-14 items-center px-4 justify-between border-b w-full bg-white">
      <img src={LOGO} className="h-10 object-contain ml-1" />
      <Space>
        <Dropdown
          menu={{
            items: [
              {
                key: '0',
                danger: true,
                label: 'Logout',
                onClick: () => {
                  localStorage.clear()
                  history.push('/auth/login')
                },
              },
            ],
          }}
        >
          <Space>
            <Avatar className="bg-primary">
              <span className="font-bold uppercase">{user?.data.user?.email?.split('')?.[0]}</span>
            </Avatar>
            <Typography.Paragraph className="mb-0">{user?.data.user?.email}</Typography.Paragraph>
          </Space>
        </Dropdown>
      </Space>
    </div>
  )
}
