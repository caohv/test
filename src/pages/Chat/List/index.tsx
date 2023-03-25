import { Button, Card, Col, Modal, Row, Typography } from 'antd'
import { isEmpty, map } from 'lodash'
import { MainLayout } from '@/components'
import { useCreateMessageMutation, useDeleteMessageMutation, useGetMessagesQuery } from '@/hooks'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { history } from '@umijs/max'
import dayjs from 'dayjs'

export default () => {
  const { data: messages } = useGetMessagesQuery()
  const { mutate: onDeleteMessage } = useDeleteMessageMutation()
  const { mutate: onCreateMessage } = useCreateMessageMutation()

  return (
    <MainLayout>
      <Row gutter={[24, 24]} justify={!isEmpty(messages?.data) ? 'start' : 'center'}>
        {!isEmpty(messages?.data) ? (
          <>
            {map(messages?.data, (message) => (
              <Col span={12} lg={8} key={message?.id}>
                <Card
                  size="small"
                  bordered={false}
                  hoverable
                  title={message?.messages?.[0]?.content || 'Empty message'}
                  extra={
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        Modal.confirm({
                          title: 'Bạn có chắc chắn muốn xóa?',
                          onOk: () => {
                            onDeleteMessage({
                              id: message?.id,
                            })
                          },
                          okButtonProps: {
                            className: 'bg-primary',
                          },
                        })
                      }}
                      type="text"
                      size="small"
                      icon={<FontAwesomeIcon icon={faTrash} />}
                    />
                  }
                  onClick={() => history.push(`/chat/${message?.id}`)}
                >
                  <Typography.Paragraph className="mb-0 text-xs">
                    {dayjs(message?.createdAt).format('DD/MM/YYYY HH:mm')}
                  </Typography.Paragraph>
                </Card>
              </Col>
            ))}
          </>
        ) : (
          <Col span={12}>
            <div
              onClick={() => onCreateMessage()}
              className="mt-20 flex items-center justify-center bg-white rounded-lg h-16 border-dashed border cursor-pointer shadow-md"
            >
              <Typography.Paragraph className="mb-0">
                Empty messages. Please click here to start a new conversation.
              </Typography.Paragraph>
            </div>
          </Col>
        )}
      </Row>
    </MainLayout>
  )
}
