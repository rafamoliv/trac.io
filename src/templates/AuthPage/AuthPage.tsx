import { Card, Carousel, Layout, Avatar, Typography, QRCode } from "antd"
import { UserOutlined } from '@ant-design/icons';
import { ChildrenContent, IntroductionContainerGrid, IntroductionContent, Grid, CarouselContent, CarouselProfile } from "./AuthPage.style"
import { ChildrenProps } from "./types"
import config from './AuthPage.config'
import { useTranslation } from "react-i18next";
import Lottie from 'react-lottie'
import { AnimationDash } from "@/assets";

/**
 * External pages template root
 * 
 * @param {ReactNode} children
 */


const AuthPage = ({ children }: ChildrenProps) => {
  const { t } = useTranslation('authPageText')

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Grid>
        <IntroductionContainerGrid>
          <IntroductionContent>
            <Typography.Title level={3} style={{ color: '#fff' }}>trac.io</Typography.Title>
            <Typography.Paragraph style={{ color: '#fff', fontSize: '20px', fontWeight: '600' }}>{t('introduction')}</Typography.Paragraph>
            <Lottie
              isClickToPauseDisabled={true}
              isPaused={false}
              isStopped={false}
              height={396}
              options={{
                loop: true,
                autoplay: true,
                animationData: AnimationDash
              }}
            />
            <div>
              <Carousel autoplay>
                {config.carrouselData.map((data, index) => (
                  <div key={index}>
                    <Card style={{ backgroundColor: '#49565e', border: 0, height: '176px', opacity: '0.9' }}>
                      <CarouselContent>
                        <Typography.Text italic style={{ fontSize: '14px' }}>{`"${data.description}"`}</Typography.Text>
                        <CarouselProfile>
                          <Avatar shape="square" size={"large"} icon={<UserOutlined />} src={data.avatar} />
                          <CarouselContent style={{ gap: '0' }}>
                            <Typography.Text style={{ fontSize: '16px' }}>{data.name}</Typography.Text>
                            <Typography.Text type="secondary">{data.jobType}</Typography.Text>
                          </CarouselContent>
                        </CarouselProfile>
                      </CarouselContent>
                    </Card>
                  </div>
                ))}
              </Carousel>
            </div>
          </IntroductionContent>
        </IntroductionContainerGrid>
        <ChildrenContent>{children}</ChildrenContent>
      </Grid>
    </Layout>
  )
}

export default AuthPage
