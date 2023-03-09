import styled from 'styled-components'
import { Layout, Typography } from 'antd'

/**
 * Root
 */

export const Header = styled(Layout.Header)`
  align-items: center;
  background: transparent;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`

export const MenuContent = styled.nav`
  display: flex;
  flex-direction: column;
  height: calc(100% - 80px);
  justify-content: space-between;
`

export const MenuTop = styled.div``

export const Flags = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`

/**
 * Profile Image
 */

export const ProfileContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 4px;
  padding: 0 16px 0 16px;
`

export const ProfileName = styled(Typography.Paragraph)`
  display: ${({ collapsed }: { collapsed: number }) =>
    collapsed ? 'none' : 'block'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

/**
 * Logo Image
 */

export const LogoFigure = styled.figure`
  height: 32px;
  margin: 16px;
  text-align: center;
`

/**
 * Section
 */

export const Section = styled.section`
  padding: 16px;
`
