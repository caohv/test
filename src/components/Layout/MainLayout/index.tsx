import { useMemo } from 'react'
import { FloatButton, Modal } from 'antd'
import { useCreateMessageMutation } from '@/hooks'
import { PageContainer } from '@ant-design/pro-components'
import { faList, faPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { history, useMatch } from '@umijs/max'

type Props = {
  children?: JSX.Element | JSX.Element[]
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const match = useMatch('/chat/:id')
  const id = useMemo(() => match?.params?.id, [match?.params?.id])
  const { mutate: onCreateMessage } = useCreateMessageMutation()

  return (
    <PageContainer className="h-screen bg-slate-50" title={false}>
      {children}
      <FloatButton.Group>
        <FloatButton
          onClick={() => {
            Modal.confirm({
              title: 'Bạn có chắc chắn muốn đăng xuất?',
              onOk: () => {
                localStorage.clear()
                history.push('/auth/login')
              },
              okButtonProps: {
                className: 'bg-primary',
              },
            })
          }}
          icon={<FontAwesomeIcon icon={faRightFromBracket} />}
          className="bottom-16"
        />
        {id && (
          <FloatButton
            onClick={() => history.push('/chat')}
            icon={<FontAwesomeIcon icon={faList} />}
            className="bottom-16"
          />
        )}
        <FloatButton
          onClick={() => onCreateMessage()}
          type="primary"
          icon={<FontAwesomeIcon icon={faPlus} />}
          className="bottom-16"
        />
      </FloatButton.Group>
    </PageContainer>
  )
}
