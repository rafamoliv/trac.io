import { faArrowLeftLong } from '@fortawesome/pro-thin-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { Button } from '@/components'

import { Card, Container, Docs, Logo } from './Dashboard.styles'

import { SystemPage } from '@/templates/SystemPage'
/* import {
  useFetchAssetsQuery,
  useFetchAssetsByIdQuery,
  useFetchUsersQuery,
  useFetchUsersByIdQuery,
  useFetchUnitsQuery,
  useFetchUnitsByIdQuery,
  useFetchCompaniesQuery,
  useFetchCompaniesByIdQuery,
  useFetchWorkordersQuery,
  useFetchWorkordersByIdQuery
} from '@/services/api'
import { useAppSelector } from '@/utils/hooks' */

const Home = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation('pgHome')
  /*   const { data: assets = [] } = useFetchAssetsQuery('')
    const { data: assetsById = [] } = useFetchAssetsByIdQuery('2')
    const { data: users = [] } = useFetchUsersQuery('')
    const { data: usersById = [] } = useFetchUsersByIdQuery('1')
    const { data: units = [] } = useFetchUnitsQuery('')
    const { data: unitsById = [] } = useFetchUnitsByIdQuery('1')
    const { data: companies = [] } = useFetchCompaniesQuery('')
    const { data: companiesById = [] } = useFetchCompaniesByIdQuery('1')
    const { data: workorders = [] } = useFetchWorkordersQuery('')
    const { data: workordersById = [] } = useFetchWorkordersByIdQuery('1') */
  const [count, setCount] = useState(0)

  /*   console.log({ assets, users, units, companies, workorders })
    console.log({ assetsById, usersById, unitsById, companiesById, workordersById }) */

  return (
    <SystemPage.Root>
      <SystemPage.Header title='Dashboard'>
        Teste
      </SystemPage.Header>
      <SystemPage.Section>
        <Container>
          <div>
            <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
              <Logo alt="Vite logo" src="/vite.svg" />
            </a>
            <a href="https://reactjs.org" rel="noreferrer" target="_blank">
              {/* <Logo alt="React logo" src={reactLogo} /> */}
            </a>
          </div>

          <h1>{t('title')}</h1>
          <FontAwesomeIcon icon={faArrowLeftLong} />
          <Docs>{t('summary')}</Docs>
          <p>{'changeResult'}</p>

          <Card>
            <Button onClick={() => setCount((count) => count + 1)} primary>
              {t('count', { value: count })}
            </Button>
          </Card>

          <div>
            <Button
              onClick={() => {
                alert(`Clicked! Change isInitialized to: `)
                console.log('!isInitialized')
              }}
              primary
            >
              {t('btn', { context: 'redux' })}
            </Button>
            <Button onClick={() => console.log()}>
              {t('btn', { context: 'signout' })}
            </Button>
          </div>

          <div>
            <p>
              <strong>{t('redux')}</strong>
            </p>
            {/* {data?.map((x, i) => {
          return <p key={i}>{x.name}</p>
        })} */}
          </div>
        </Container>
      </SystemPage.Section>
    </SystemPage.Root>
  )
}
export default Home
