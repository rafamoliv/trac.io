import { useTranslation } from 'react-i18next'
import { SystemPage } from '@/templates/SystemPage'
import { Loading } from '@/components'
import { Badge, Card, Col, Row, Image, Input, Modal, Typography, Progress, Timeline, Button, Empty } from 'antd';
import { useFetchAssetsQuery, useLazyFetchAssetsByIdQuery } from '@/services/api';
import { assetsDataProps } from './types';
import { Key, useState } from 'react';
import { CardContent, CardDetails, CardSpecifications, EmptyContent, ModalContent } from './Assets.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faPlugCircleBolt, faTemperatureHigh, faRotate } from '@fortawesome/free-solid-svg-icons';
import { dateFormat } from '@/utils';
import { theme } from '@/styles';

const Assets = () => {
  const { t } = useTranslation('pgAssets')
  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const { data: assetsData = [], isLoading } = useFetchAssetsQuery('')
  const [takeAssetInfo, { currentData: assetByIdData, isFetching: isLoadingAssetById }] = useLazyFetchAssetsByIdQuery()

  const onSearch = (value: string) => setSearchValue(value)

  const doOpenModal = (id: Key) => {
    takeAssetInfo(id)
    setOpenModal(true)
  }

  const takeFilteredAssets = () => {
    if (searchValue === '' || searchValue === undefined) {
      return assetsData
    }

    return assetsData.filter(
      (asset: assetsDataProps) =>
        asset.name.search(new RegExp(searchValue, 'gi')) !== -1 ||
        asset.status.search(new RegExp(searchValue, 'gi')) !== -1
    )
  }

  const takeAssetsByStatus: any = {
    inAlert: { color: 'yellow', text: t('status.inAlert') },
    inOperation: { color: 'green', text: t('status.inOperation') },
    inDowntime: { color: 'red', text: t('status.inDowntime') },
    unplannedStop: { color: 'red', text: t('status.unplannedStop') },
    plannedStop: { color: 'blue', text: t('status.plannedStop') }
  }

  return (
    <SystemPage.Root>
      <SystemPage.Header title={t('title')}>
        <Input.Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
      </SystemPage.Header>
      <SystemPage.Section>
        <Row gutter={[16, 16]}>
          <Loading loading={isLoading}>
            {takeFilteredAssets().map((asset: assetsDataProps, index: Key) => (
              <Col key={index} onClick={() => doOpenModal(asset?.id)} className="gutter-row" sm={24} md={12} lg={8} xl={6} style={{ cursor: 'pointer' }}>
                <Badge.Ribbon text={takeAssetsByStatus[asset?.status].text} color={takeAssetsByStatus[asset?.status].color}>
                  <Card hoverable cover={
                    <Image
                      preview={false}
                      height={168}
                      src={asset?.image}
                    />
                  }>
                    <CardContent>
                      <Card.Meta title={asset?.name} description={asset?.model} />
                      <CardDetails>
                        <Typography.Title level={5}>{t('specifications')}</Typography.Title>
                        <CardSpecifications>
                          <CardSpecifications>
                            <FontAwesomeIcon icon={faTemperatureHigh as IconProp} />
                            <Typography.Text>{asset?.specifications?.maxTemp}º</Typography.Text>
                          </CardSpecifications>
                          <CardSpecifications>
                            <FontAwesomeIcon icon={faPlugCircleBolt as IconProp} />
                            <Typography.Text>{asset?.specifications?.power}kw</Typography.Text>
                          </CardSpecifications>
                          <CardSpecifications>
                            <FontAwesomeIcon icon={faRotate as IconProp} />
                            <Typography.Text>{asset?.specifications?.rpm}rpm</Typography.Text>
                          </CardSpecifications>
                        </CardSpecifications>
                      </CardDetails>
                      <CardDetails>
                        <Typography.Title level={5}>{t('healthscore')}</Typography.Title>
                        <Progress percent={asset?.healthscore} strokeColor={{ '0%': theme.colors.primary.light, '100%': theme.colors.primary.medium }} />
                      </CardDetails>
                    </CardContent>
                  </Card>
                </Badge.Ribbon>
              </Col>
            ))}
            {!takeFilteredAssets().length && <EmptyContent><Empty description={t('empty')} /></EmptyContent>}
          </Loading>

          {openModal && (
            <Modal
              footer={<Button onClick={() => setOpenModal(false)}>{t('btn', { context: 'close' })}</Button>}
              open={openModal}
              onCancel={() => setOpenModal(false)}
              onOk={() => setOpenModal(false)}
              title={assetByIdData?.name}
            >
              <ModalContent>
                <Loading loading={isLoadingAssetById} size={'sm'}>
                  <Typography.Title level={5} style={{ textAlign: 'center' }}>{t('healthHistory')}</Typography.Title>
                  <Timeline
                    mode="alternate"
                    items={assetByIdData?.healthHistory?.map((asset: assetsDataProps) => ({
                      color: takeAssetsByStatus[asset?.status].color,
                      children: (
                        <Typography.Text>
                          {`${takeAssetsByStatus[asset?.status].text} ${dateFormat(asset?.timestamp)}`}
                        </Typography.Text>
                      )
                    }))}
                  />
                </Loading>
              </ModalContent>
            </Modal>
          )}
        </Row>
      </SystemPage.Section>
    </SystemPage.Root>
  )
}
export default Assets
