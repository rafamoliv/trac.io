import { useTranslation } from 'react-i18next'
import { SystemPage } from '@/templates/SystemPage'
import { Card, Loading } from '@/components'
import { Col, Row, Image, Input, Modal, Typography } from 'antd';
import { useFetchAssetsQuery, useLazyFetchAssetsByIdQuery } from '@/services/api';
import { assetsDataProps } from './types';
import { useEffect, useState } from 'react';

const Assets = () => {
  const { t } = useTranslation('pgAssets')
  const [searchValue, setSearchValue] = useState('')
  const { data: assetsData = [], isLoading } = useFetchAssetsQuery('')
  const [takeAssetInfo, { currentData: assetByIdData }] = useLazyFetchAssetsByIdQuery()

  const modalAssetInfo = () => {
    Modal.info({
      title: assetByIdData?.name,
      content: (
        <div>
          <Typography.Text>{assetByIdData?.status}</Typography.Text>
        </div>
      ),
      onOk() { },
    });
  };

  const onSearch = (value: string) => setSearchValue(value)

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

  useEffect(() => {
    if (assetByIdData) {
      modalAssetInfo()
    }
  }, [assetByIdData])

  return (
    <SystemPage.Root>
      <SystemPage.Header title={t('title')}>
        <Input.Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
      </SystemPage.Header>
      <SystemPage.Section>
        <Row gutter={[16, 16]}>
          <Loading loading={isLoading}>
            {takeFilteredAssets().map((asset: assetsDataProps, index: number) => (
              <Col key={index} onClick={() => takeAssetInfo(asset?.id)} className="gutter-row" sm={24} md={12} lg={8} style={{ cursor: 'pointer' }}>
                <Card hoverable cover={
                  <Image
                    preview={false}
                    height={168}
                    src={asset?.image}
                  />
                }>
                  {asset?.name}
                </Card>
              </Col>
            ))}
          </Loading>
        </Row>
      </SystemPage.Section>
    </SystemPage.Root>
  )
}
export default Assets
