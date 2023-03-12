import { Card, Carousel, Layout, Avatar, Typography, QRCode } from "antd"
import { UserOutlined } from '@ant-design/icons';
import { ChildrenContent, IntroductionContainerGrid, IntroductionContent, Grid, CarouselContent, CarouselProfile } from "./AuthPage.style"
import { ChildrenProps } from "./types"
import config from './AuthPage.config'
import { useTranslation } from "react-i18next";
import Lottie from 'react-lottie'
import { AnimationDash } from "@/assets";
import { theme } from "@/styles";
import { pxToRem } from "@/utils";

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
            <Typography.Title level={3} style={{ color: theme.colors.white }}>trac.io</Typography.Title>
            <Typography.Paragraph style={{ color: theme.colors.white, fontSize: theme.font.sizes[20], fontWeight: theme.font.semiBold }}>{t('introduction')}</Typography.Paragraph>
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
                    <Card style={{ backgroundColor: theme.colors.primary.darkest, border: theme.spacing[0], height: pxToRem(176), opacity: theme.opacity[10] }}>
                      <CarouselContent>
                        <Typography.Text italic style={{ fontSize: theme.font.sizes[14] }}>{`"${data.description}"`}</Typography.Text>
                        <CarouselProfile>
                          <Avatar shape="square" size={"large"} icon={<UserOutlined />} src={data.avatar} />
                          <CarouselContent style={{ gap: theme.spacing[0] }}>
                            <Typography.Text style={{ fontSize: theme.font.sizes[14] }}>{data.name}</Typography.Text>
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
