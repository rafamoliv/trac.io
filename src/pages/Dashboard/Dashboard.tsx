import { useTranslation } from 'react-i18next'

import { SystemPage } from '@/templates/SystemPage'
import { Card } from '@/components'
import { Col, Row, Input, Avatar } from 'antd';
import { SlidersOutlined } from '@ant-design/icons';
import { ContentHeader } from './Dashboard.styles';
import { ColumnChart } from './components/ColumnChart';
import { useFetchAssetsQuery } from '@/services/api';
import { MapChart } from './components/MapChart';
import { RadialBarChart } from './components/RadialBarChart';

const Home = () => {
  const { t } = useTranslation('pgDashboard')
  const { data: assetsData = [] } = useFetchAssetsQuery('')

  const onSearch = (value: string) => console.log(value);

  return (
    <SystemPage.Root>
      <SystemPage.Header title='Dashboard'>
        <ContentHeader>
          <Input.Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
          <Avatar shape="square" style={{ backgroundColor: '#fff' }} icon={<SlidersOutlined style={{ color: '#d6d6d6' }} />} />
        </ContentHeader>
      </SystemPage.Header>
      <SystemPage.Section>
        <Row gutter={[16, 16]}>
          <Col className="gutter-row" sm={24}>
            <Card title={t('cards.healthscore')}>
              <ColumnChart data={assetsData} />
            </Card>
          </Col>
          <Col className="gutter-row" sm={24} lg={12}>
            <Card title={t('cards.activeCustomers')} >
              <MapChart />
            </Card>
          </Col>
          <Col className="gutter-row" sm={24} lg={12}>
            <Card title={t('cards.maxTemp')}>
              <RadialBarChart data={assetsData} />
            </Card>
          </Col>
          <Col className="gutter-row" sm={24}>
            <Card title={t('cards.healthscore')}>
              Card
            </Card>
          </Col>
          <Col className="gutter-row" sm={24}>
            <Card title={t('cards.healthscore')}>
              Card
            </Card>
          </Col>
        </Row>
      </SystemPage.Section>
    </SystemPage.Root>
  )
}
export default Home
