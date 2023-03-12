import { useTranslation } from 'react-i18next'
import { SystemPage } from '@/templates/SystemPage'
import { useFetchUsersQuery, useFetchWorkordersQuery } from '@/services/api'
import { Loading } from '@/components'
import { Badge, Card, Col, Divider, Descriptions, Row, Avatar, Tooltip } from 'antd';
import { Key } from 'react';
import { checklistProps, usersProps, workordersProps } from './type';
import { faker } from '@faker-js/faker';
import { initialLettersNameLastname } from '@/utils';
import { TaskList } from './Workorders.styles';

const Workorders = () => {
  const { t } = useTranslation('pgWorkorders')
  const { data: workordersData = [], isLoading: isLoadingWorkedData } = useFetchWorkordersQuery('')
  const { data: usersData = [], isLoading: isLoadingUserData } = useFetchUsersQuery('')

  const takeWorkordersByStatus: any = {
    'in progress': { status: 'processing', text: t('status.inProgress') },
    completed: { status: 'success', text: t('status.completed') }
  }

  const takeWorkordersByPriority: any = {
    high: { color: 'red', text: t('priorities.high') }
  }

  const takeAssignedUsers = (userIds: number[]) => {
    if (!userIds) return
    return userIds.map((id) => usersData.filter((user: usersProps) => user.id === id))
  }

  return (
    <SystemPage.Root>
      <SystemPage.Header title={t('title')} />
      <SystemPage.Section>
        <Loading loading={isLoadingWorkedData && isLoadingUserData}>
          <Row gutter={[16, 16]}>
            {workordersData.map((workorder: workordersProps, index: Key) => (
              <Col key={index} className="gutter-row" sm={24} lg={12} style={{ cursor: 'pointer' }}>
                <Badge.Ribbon text={takeWorkordersByPriority[workorder?.priority].text} color={takeWorkordersByPriority[workorder?.priority].color}>
                  <Card style={{ cursor: 'default' }}>
                    <Divider orientation="left">{workorder?.title}</Divider>
                    <Descriptions
                      bordered
                      column={{ lg: 2, md: 3, sm: 2, xs: 1 }}
                    >
                      <Descriptions.Item label={t('description.labels.description')} span={2}>{workorder?.description}</Descriptions.Item>
                      <Descriptions.Item label={t('description.labels.status')}>
                        <Badge status={takeWorkordersByStatus[workorder?.status].status} text={takeWorkordersByStatus[workorder?.status].text} />
                      </Descriptions.Item>
                      <Descriptions.Item label={t('description.labels.assignedUsers')}>
                        <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                          {takeAssignedUsers(workorder?.assignedUserIds).map((user, index) => (
                            <Tooltip key={index} title={user[0]?.name} placement="top">
                              <Avatar style={{ backgroundColor: faker.color.rgb({ format: 'hex' }) }}>
                                {initialLettersNameLastname(user[0]?.name)}
                              </Avatar>
                            </Tooltip>
                          ))}
                        </Avatar.Group>
                      </Descriptions.Item>
                      <Descriptions.Item label={t('description.labels.tasks')}>
                        <ul>
                          {workorder?.checklist.map(({ task, completed }: checklistProps, item) => (
                            <TaskList completed={completed} key={item}>{task}</TaskList>
                          ))}
                        </ul>
                      </Descriptions.Item>
                    </Descriptions>
                  </Card>
                </Badge.Ribbon>
              </Col>
            ))}
          </Row>
        </Loading>
      </SystemPage.Section>
    </SystemPage.Root>
  )
}
export default Workorders
