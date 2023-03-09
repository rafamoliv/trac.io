import { useTranslation } from 'react-i18next'
import { ChildrenProps } from '../types'
import {
  RocketOutlined,
  PieChartOutlined,
  TeamOutlined,
  DeploymentUnitOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined
} from '@ant-design/icons';
import { MenuProps, Layout, Menu, Typography, Avatar, Image } from 'antd';
import { useContext, useState } from 'react';
import { privateURL, publicURL } from '@/routes/urls';
import { IconTracIO } from '@/assets';
import { Flags, LogoFigure, MenuContent, MenuTop, ProfileContent, ProfileName } from '../SystemPage.style';
import { AppContext } from '@/context/AppContext';
import { useLocation, useNavigate } from 'react-router-dom';
import config from '../SystemPage.config';

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
          <Image
            alt={t('alt')}
            height={32}
            preview={false}
            src={IconTracIO}
          />
        </LogoFigure>
        <MenuContent>
          <MenuTop>
            <Menu defaultSelectedKeys={[pathname]} mode="inline" onClick={(info) => navigate(info.key)} items={items} />
            <Menu mode="inline" onClick={() => handleSignOut()} items={signOutMenuItem} />
            <Flags>
              <Avatar alt={'Brazil flag'} onClick={() => i18n.changeLanguage('ptbr')} shape="square" size="small" src={config.flags.brazil} style={{ cursor: 'pointer' }} />
              <Avatar alt={'US flag'} onClick={() => i18n.changeLanguage('en')} shape="square" size="small" src={config.flags.us} style={{ cursor: 'pointer' }} />
            </Flags>
            <button onClick={() => handleSignIn('teste@aisjidsa.com')}>SignIN</button>
          </MenuTop>
          <ProfileContent>
            <Avatar alt={user?.name} icon={<UserOutlined />} shape="square" size="large" src={user?.avatar} />
            <ProfileName collapsed={collapsed ? 1 : 0} style={{ marginBottom: 0, marginLeft: 8 }}>{user?.name}</ProfileName>
          </ProfileContent>
        </MenuContent>
      </Layout.Sider>
      <Layout className="site-layout">
        {children}
      </Layout>
    </Layout>
  )
}
