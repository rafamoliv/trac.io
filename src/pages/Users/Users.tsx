import { useTranslation } from 'react-i18next'
import { SystemPage } from '@/templates/SystemPage'
import { Card, Loading } from '@/components'
import { Avatar, Badge, Divider, Table } from 'antd';
import { useFetchUsersQuery } from '@/services/api';
import { faker } from '@faker-js/faker';
import { UserOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { tableUsersDataType, usersProps } from './type';
import { Key } from 'react';

const Users = () => {
  const { t } = useTranslation('pgUsers')
  const { data: usersData = [], isLoading } = useFetchUsersQuery('')

  const tableHeadUsers: ColumnsType<tableUsersDataType> = [
    {
      title: '',
      dataIndex: 'avatar',
      key: 'avatar'
    },
    {
      title: t('table.head.0'),
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: t('table.head.1'),
      dataIndex: 'nickname',
      key: 'nickname',
      responsive: ['lg']
    },
    {
      title: t('table.head.2'),
      dataIndex: 'email',
      key: 'email',
      responsive: ['lg']
    }
  ]

  const takeUsers = () => {
    return usersData.map((user: usersProps, index: Key) => ({
      key: index,
      avatar: <Badge dot status='success'><Avatar shape="square" icon={<UserOutlined />} src={faker.image.avatar()} size={32} /></Badge>,
      name: user?.name,
      nickname: faker.internet.userName(user?.name),
      email: user?.email
    }))
  }

  return (
    <SystemPage.Root>
      <SystemPage.Header title={t('title')} />
      <SystemPage.Section>
        <Loading loading={isLoading}>
          <Card>
            <Divider orientation="left">{t('table.title')}</Divider>
            <Table columns={tableHeadUsers} dataSource={takeUsers()} pagination={false} />
          </Card>
        </Loading>
      </SystemPage.Section>
    </SystemPage.Root>
  )
}
export default Users
