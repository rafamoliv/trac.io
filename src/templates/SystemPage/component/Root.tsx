import { useTranslation } from 'react-i18next'
import { ChildrenProps } from '../types'
import {
  RocketOutlined,
  PieChartOutlined,
  TeamOutlined,
  DeploymentUnitOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { MenuProps, Layout, Menu, Typography } from 'antd';
import { useContext, useState } from 'react';
import { privateURL, publicURL } from '@/routes/urls';
import { IconTracIO } from '@/assets';
import { LogoFigure, LogoImage, ProfileFigure, ProfileImage, MenuBottom, MenuContent, ProfileContent } from '../SystemPage.style';
import { AppContext } from '@/context/AppContext';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Internal pages template root
 * 
 * @param {ReactNode} children
 */

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const Root = ({ children }: ChildrenProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { t, i18n } = useTranslation('systemPagesText')
  const [collapsed, setCollapsed] = useState(false);
  const { handleSignIn, handleSignOut, user } = useContext(AppContext)

  const { DASHBOARD, ASSETS, WORKORDERS, COMPANIES, UNITS, USERS, SETTINGS } = privateURL

  const menuItemsText = {
    dashboard: t('systemPagesText:menu.dashboard'),
    products: t('systemPagesText:menu.products'),
    assets: t('systemPagesText:menu.assets'),
    workorders: t('systemPagesText:menu.workorders'),
    companies: t('systemPagesText:menu.companies'),
    units: t('systemPagesText:menu.units'),
    users: t('systemPagesText:menu.users'),
    settings: t('systemPagesText:menu.settings'),
    logout: t('systemPagesText:menu.logout')
  }

  const items: MenuItem[] = [
    getItem(menuItemsText.dashboard, DASHBOARD, <PieChartOutlined />),
    getItem(menuItemsText.products, 'sub1', <DeploymentUnitOutlined />, [
      getItem(menuItemsText.assets, ASSETS),
      getItem(menuItemsText.workorders, WORKORDERS)
    ]),
    getItem(menuItemsText.companies, 'sub2', <RocketOutlined />, [
      getItem(menuItemsText.companies, COMPANIES),
      getItem(menuItemsText.units, UNITS)
    ]),
    getItem(menuItemsText.users, USERS, <TeamOutlined />),
    getItem(menuItemsText.settings, SETTINGS, <SettingOutlined />)
  ];

  const signOutMenuItem: MenuItem[] = [
    getItem(menuItemsText.logout, publicURL.SIGNIN, <LogoutOutlined />)
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme='light'>
        <LogoFigure>
          <LogoImage alt={t('alt')} src={IconTracIO} />
        </LogoFigure>
        <MenuContent>
          <Menu defaultSelectedKeys={[pathname]} mode="inline" onClick={(info) => navigate(info.key)} items={items} />
          <MenuBottom>
            <div className="d-flex gap-1">
              <button onClick={() => i18n.changeLanguage('ptbr')}>PT</button>
              <button onClick={() => i18n.changeLanguage('en')}>EN</button>
            </div>
            <button onClick={() => handleSignIn('teste@aisjidsa.com')}>SignIN</button>
            <ProfileContent>
              <ProfileFigure>
                <ProfileImage alt={user?.name} src={user?.avatar} />
              </ProfileFigure>
              <Typography.Paragraph style={{ marginBottom: 0 }}>{user?.name}</Typography.Paragraph>
            </ProfileContent>
            <Menu mode="inline" onClick={() => handleSignOut()} items={signOutMenuItem} />
          </MenuBottom>
        </MenuContent>
      </Layout.Sider>
      <Layout className="site-layout">
        {children}
      </Layout>
    </Layout>
  )
}
