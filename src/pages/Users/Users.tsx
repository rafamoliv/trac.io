import { useTranslation } from 'react-i18next'
import { SystemPage } from '@/templates/SystemPage'
import { Card } from '@/components'
import { Divider } from 'antd';

const Users = () => {
  const { t } = useTranslation('pgSettings')

  return (
    <SystemPage.Root>
      <SystemPage.Header title={t('title')} />
      <SystemPage.Section>
        <Card>
          <Divider orientation="left">{t('card', { context: 'language' })}</Divider>
          iadsuiuh
        </Card>
      </SystemPage.Section>
    </SystemPage.Root>
  )
}
export default Users
