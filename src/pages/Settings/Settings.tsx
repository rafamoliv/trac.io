import { useTranslation } from 'react-i18next'
import { SystemPage } from '@/templates/SystemPage'
import { Card } from '@/components'
import { Divider, Select, notification } from 'antd';

const Settings = () => {
  const { t, i18n } = useTranslation('pgSettings')
  const [api, contextHolder] = notification.useNotification();

  const doChangeDefaultSystemLanguage = (value: string, label: unknown) => {
    i18n.changeLanguage(value)
    notification['success']({
      placement: 'bottomRight',
      message: t('notification', { context: 'title' }),
      description: t('notification', { context: 'msg' })
    })
  }

  return (
    <SystemPage.Root>
      <SystemPage.Header title={t('title')} />
      <SystemPage.Section>
        <Card>
          <Divider orientation="left">{t('card', { context: 'language' })}</Divider>
          <Select
            style={{ width: 176 }}
            onChange={(value, label) => doChangeDefaultSystemLanguage(value, label)}
            options={[
              { value: 'ptbr', label: t('language.brazilianPortuguese') },
              { value: 'en', label: t('language.english') },
              { value: 'disabled', label: t('language.spanish'), disabled: true },
            ]}
          />
        </Card>
      </SystemPage.Section>
    </SystemPage.Root>
  )
}
export default Settings
