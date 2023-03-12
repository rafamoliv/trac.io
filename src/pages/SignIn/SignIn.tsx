import { useTranslation } from 'react-i18next'
import { useContext, useEffect } from 'react';
import { AuthPage } from '@/templates/AuthPage';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '@/context/AppContext';
import { privateURL } from '@/routes/urls';
import { Image, Input, Form, Button, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { IconTracIO } from '@/assets'

const Settings = () => {
  const { t } = useTranslation('pgSignIn')
  const navigate = useNavigate()
  const { user, handleSignIn } = useContext(AppContext)

  const onFinish = ({ username }: { username: string }) => {
    handleSignIn?.(username)
  };

  useEffect(() => {
    if (user) navigate(privateURL.DASHBOARD)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <AuthPage>
      <Card style={{ padding: '24px' }}>
        <Image preview={false} src={IconTracIO} style={{ marginBottom: '40px' }} />
        <Form
          name="signin"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name={'username'}
            rules={[{ required: true, message: t('form.validation', { context: 'username' }) }]}
          >
            <Input prefix={<UserOutlined />} placeholder={t('form.username')} />
          </Form.Item>
          <Form.Item
            name={'password'}
            rules={[{ required: true, message: t('form.validation', { context: 'password' }) }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder={t('form.password')}
            />
          </Form.Item>
          <Form.Item>
            <Button block htmlType="submit">
              {t('form.btn')}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </AuthPage>
  )
}
export default Settings
