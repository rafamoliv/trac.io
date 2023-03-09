import { useTranslation } from 'react-i18next'
import { SystemPage } from '@/templates/SystemPage'

const Settings = () => {
  const { t } = useTranslation('pgSettings')

  return (
    <SystemPage.Root>
      <SystemPage.Header title='Settings' />
      <SystemPage.Section>
        Settings
      </SystemPage.Section>
    </SystemPage.Root>
  )
}
export default Settings
