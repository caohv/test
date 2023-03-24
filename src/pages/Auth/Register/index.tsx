import { useCallback } from 'react'
import { Button, Col, Form, Input, Row, Typography } from 'antd'
import { useRegisterMutation } from '@/hooks'
import { Link } from '@umijs/max'

export default () => {
  const { mutate, isLoading } = useRegisterMutation()
  const [form] = Form.useForm()

  const onFinish = useCallback(
    (values: any) => {
      mutate({
        ...values,
      })
    },
    [mutate]
  )

  return (
    <div className="min-h-screen p-2">
      <Row justify="center">
        <Col span={24} lg={8}>
          <div className="p-8 bg-white rounded-lg shadow-xl mt-8 mb-8">
            <Form
              form={form}
              onFinish={onFinish}
              layout="vertical"
              initialValues={{
                email: '',
                password: '',
              }}
            >
              <Typography.Title level={4}>Sign Up</Typography.Title>
              <Typography.Paragraph>Please enter your details below.</Typography.Paragraph>
              <Form.Item
                name="email"
                label="Email Address"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input size="large" placeholder="example@email.com" />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password size="large" placeholder="Enter your password" />
              </Form.Item>
              <div className="flex items-center justify-end mb-2">
                <Link to="/auth/forgot-password">Forgot Password?</Link>
              </div>
              <Form.Item>
                <Button size="large" block type="primary" className="bg-primary" htmlType="submit" loading={isLoading}>
                  Sign Up
                </Button>
              </Form.Item>
              <div>
                <span>You have an account?</span> <Link to="/auth/login">Go back to login</Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  )
}
