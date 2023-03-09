import { useTranslation } from 'react-i18next'

import { SystemPage } from '@/templates/SystemPage'

const Home = () => {
  const { t } = useTranslation('pgHome')

  console.log(t('title'))

  return (
    <SystemPage.Root>
      <SystemPage.Header title='Dashboard'>
        Teste
      </SystemPage.Header>
      <SystemPage.Section>
        Dash
      </SystemPage.Section>
    </SystemPage.Root>
  )
}
export default Home
