import { useTranslation } from 'react-i18next'
import { SystemPage } from '@/templates/SystemPage'

const Workorders = () => {
  const { t } = useTranslation('pgWorkorders')

  return (
    <SystemPage.Root>
      <SystemPage.Header title='Workorders' />
      <SystemPage.Section>
        Workorders
      </SystemPage.Section>
    </SystemPage.Root>
  )
}
export default Workorders
