import { Card, Carousel, Layout, Avatar, Typography, QRCode } from "antd"
import { UserOutlined } from '@ant-design/icons';
import { Content, IntroductionContainerGrid, IntroductionContent, Grid, CarouselContent, CarouselProfile, Animation as StyledAnimation } from "./AuthPage.style"
import { ChildrenProps } from "./types"
import config from './AuthPage.config'
import Lottie from 'react-lottie'
import { AnimationDash } from "@/assets";

/**
 * External pages template root
 * 
 * @param {ReactNode} children
 */


const AuthPage = ({ children }: ChildrenProps) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Grid>
        <IntroductionContainerGrid>
          <IntroductionContent>
            <StyledAnimation>
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
              <QRCode value="https://www.linkedin.com/in/rafamoliv/" />
            </StyledAnimation>
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
        <Content>{children}</Content>
      </Grid>
    </Layout>
  )
}

export default AuthPage
