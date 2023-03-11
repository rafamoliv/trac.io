import { useTranslation } from 'react-i18next'
import { SystemPage } from '@/templates/SystemPage'
import { Card, Loading } from '@/components'
import { Descriptions, Divider, List } from 'antd';
import { useFetchCompaniesQuery, useFetchUnitsQuery } from '@/services/api';
import { faker } from '@faker-js/faker';
import { Key } from 'react';
import { companiesProps, unitsProps } from './type';

const Companies = () => {
  const { t } = useTranslation('pgCompanies')
  const { data: companiesData = [], isLoading: isLoadingCompanies } = useFetchCompaniesQuery('')
  const { data: unitsData = [], isLoading: isLoadingUnits } = useFetchUnitsQuery('')

  const takeUnitsByIdCompany = (id: Key) => {
    if (!id) return
    return unitsData.filter((units: unitsProps) => units.companyId === id)
  }

  return (
    <SystemPage.Root>
      <SystemPage.Header title={t('title')} />
      <SystemPage.Section>
        <Loading loading={isLoadingCompanies}>
          {companiesData.map((companies: companiesProps, index: Key) => (
            <Card key={index}>
              <Divider orientation="left">{companies?.name}</Divider>
              <Descriptions
                bordered
                column={1}
              >
                <Descriptions.Item label={t('description.labels.description')}>{faker.company.catchPhrase()}</Descriptions.Item>
                <Descriptions.Item label={t('description.labels.address')}>{faker.address.streetAddress()}</Descriptions.Item>
                <Descriptions.Item label={t('description.labels.zipCode')}>{faker.address.zipCodeByState('')}</Descriptions.Item>
                <Descriptions.Item label={t('description.labels.paymentAccount')}>{faker.finance.accountName()}</Descriptions.Item>
                <Descriptions.Item label={t('description.labels.units')}>
                  <Loading loading={isLoadingUnits}>
                    <List size="small">
                      {takeUnitsByIdCompany(companies?.id).map((unit: unitsProps, index: Key) => (
                        <List.Item key={index}>{unit?.name}</List.Item>
                      ))}
                    </List>
                  </Loading>
                </Descriptions.Item>
              </Descriptions>
            </Card>
          ))}
        </Loading>
      </SystemPage.Section>
    </SystemPage.Root>
  )
}
export default Companies
