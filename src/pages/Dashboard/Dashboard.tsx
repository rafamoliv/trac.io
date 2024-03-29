import { useTranslation } from 'react-i18next'
import { SystemPage } from '@/templates/SystemPage'
import { Card } from '@/components'
import { Col, Row, Input, Avatar, Divider, Typography, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { SlidersOutlined, UserOutlined } from '@ant-design/icons';
import { ContentHeader } from './Dashboard.styles';
import { ColumnChart } from './components/ColumnChart';
import { useFetchAssetsQuery, useFetchWorkordersQuery } from '@/services/api';
import { MapChart } from './components/MapChart';
import { RadialBarChart } from './components/RadialBarChart';
import { tableRecentEmailsDataType, workorderProps } from './types';
import { faker } from '@faker-js/faker';
import { theme } from '@/styles';
import { Key } from 'react';

const Home = () => {
  const { t } = useTranslation('pgDashboard')
  const { data: assetsData = [] } = useFetchAssetsQuery('')
  const { data: workordersData = [] } = useFetchWorkordersQuery('')

  const takeInProgressWorkorders = () => (
    workordersData.filter(({ status }: { status: string }) => {
      return status === "in progress"
    })
  )

  const tableRecentEmailColumns: ColumnsType<tableRecentEmailsDataType> = [
    {
      title: '',
      dataIndex: 'image',
      key: 'image'
    },
    {
      title: t('recentEmailsTable.columns.0'),
      dataIndex: 'company',
      key: 'company'
    },
    {
      title: t('recentEmailsTable.columns.1'),
      dataIndex: 'subject',
      key: 'subject',
      responsive: ['lg']
    },
    {
      title: t('recentEmailsTable.columns.2'),
      dataIndex: 'date',
      key: 'date',
      responsive: ['lg']
    }
  ]

  const tableRecentEmailData: tableRecentEmailsDataType[] = [
    {
      key: '1',
      image: <Avatar shape="square" icon={<UserOutlined />} src={faker.image.business()} size={32} />,
      company: faker.company.name(),
      subject: faker.lorem.sentences(1),
      date: t('date', { value: faker.datatype.number({ min: 2, max: 10 }) })
    },
    {
      key: '2',
      image: <Avatar shape="square" icon={<UserOutlined />} src={faker.image.business()} size={32} />,
      company: faker.company.name(),
      subject: faker.lorem.sentences(1),
      date: t('date', { value: faker.datatype.number({ min: 11, max: 19 }) })
    },
    {
      key: '3',
      image: <Avatar shape="square" icon={<UserOutlined />} src={faker.image.business()} size={32} />,
      company: faker.company.name(),
      subject: faker.lorem.sentences(1),
      date: t('date', { value: faker.datatype.number({ min: 20, max: 29 }) })
    }
  ]

  const onSearch = (value: string) => console.log(value);

  return (
    <SystemPage.Root>
      <SystemPage.Header title={t('title')}>
        <ContentHeader>
          <Input.Search disabled placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
          <Avatar shape="square" style={{ backgroundColor: theme.colors.white }} icon={<SlidersOutlined style={{ color: theme.colors.primary.lightest }} />} />
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
            <Card title={t('cards.workorders')}>
              {takeInProgressWorkorders().map((workorder: workorderProps, index: Key) => (
                <div key={index}>
                  <Divider orientation="left">{workorder?.title}</Divider>
                  <Typography.Text>{workorder?.description}</Typography.Text>
                </div>
              ))}
            </Card>
          </Col>
          <Col className="gutter-row" sm={24}>
            <Card title={t('cards.recentEmails')}>
              <Table columns={tableRecentEmailColumns} dataSource={tableRecentEmailData} pagination={false} />
            </Card>
          </Col>
        </Row>
      </SystemPage.Section>
    </SystemPage.Root>
  )
}
export default Home
