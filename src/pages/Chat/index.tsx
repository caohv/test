import { useCallback, useState } from 'react'
import { Avatar, Button, Col, Form, Input, Row } from 'antd'
import { map } from 'lodash'
import { LOGO } from '@/assets'
import { MainLayout, Typing } from '@/components'
import { useSendMessageMutation } from '@/hooks'
import { useEmotionCss } from '@ant-design/use-emotion-css'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Message } from './components'
import Scrollbars from 'react-custom-scrollbars-2'

export default () => {
  const [form] = Form.useForm()
  const className = useEmotionCss(() => ({
    flex: 1,
    height: 'calc(100vh - 96px)',
  }))

  const [messages, setMessages] = useState<
    {
      role: 'user' | 'assistant'
      content: string
    }[]
  >([])

  const onSuccess = useCallback(
    (rs: any) => {
      setMessages([...messages, ...map(rs?.choices, (choice: any) => ({ ...choice?.message }))])
    },
    [messages]
  )

  const { mutate: onSendMessage, isLoading } = useSendMessageMutation(onSuccess)

  const onFinish = useCallback(
    (values: any) => {
      setMessages([
        ...messages,
        {
          role: 'user',
          content: values.content,
        },
      ])
      onSendMessage({
        messages: [
          ...messages,
          {
            role: 'user',
            content: values.content,
          },
        ],
      })
      form.setFieldValue('content', '')
    },
    [form, messages, onSendMessage]
  )

  return (
    <MainLayout>
      <Form form={form} onFinish={onFinish}>
        <div className={className}>
          <Scrollbars className="flex-1 h-full">
            <Row justify="center" className="pb-6 pl-10 pr-6">
              <Col span={24} lg={12}>
                {map(messages, (message, index) => (
                  <Message message={message} key={index} />
                ))}
                {isLoading && (
                  <div className="flex items-center mt-4 relative">
                    <div className="absolute top-0 -left-[28px] lg:-left-24px">
                      <Avatar size="small" className="bg-orange-200 flex items-center justify-center">
                        <img src={LOGO} className="w-8" />
                      </Avatar>
                    </div>
                    <Typing />
                  </div>
                )}
              </Col>
            </Row>
          </Scrollbars>
        </div>
        <div className="w-full z-50 bg-white">
          <Row justify="center">
            <Col span={22} lg={16}>
              <Form.Item name="content" className="mb-0">
                <Input
                  placeholder="Type your message..."
                  size="large"
                  className="shadow-[0_0_10px_rgba(0,0,0,0.10)]"
                  suffix={
                    <Button type="text" shape="round" htmlType="submit">
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </Button>
                  }
                />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Form>
    </MainLayout>
  )
}
