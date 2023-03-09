import { useTranslation } from 'react-i18next'
import { SystemPage } from '@/templates/SystemPage'

const Assets = () => {
  const { t } = useTranslation('pgAssets')

  return (
    <SystemPage.Root>
      <SystemPage.Header title='Assets' />
      <SystemPage.Section>
        Assets
      </SystemPage.Section>
    </SystemPage.Root>
  )
}
export default Assets
