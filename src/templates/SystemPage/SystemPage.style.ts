import styled from 'styled-components'
import { Layout } from 'antd'

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

export const MenuBottom = styled.div``

/**
 * Profile Image
 */

export const ProfileContent = styled.div`
  align-items: center;
  display: flex;
  margin: 4px;
  padding: 0 8px 0 16px;
`

export const ProfileFigure = styled.figure`
  margin-right: 16px;
`

export const ProfileImage = styled.img`
  border-radius: 8px;
  height: 32px;
`

/**
 * Logo Image
 */

export const LogoFigure = styled.figure`
  height: 32px;
  margin: 16px;
  text-align: center;
`

export const LogoImage = styled.img`
  height: 32px;
  max-width: 100%;
`

/**
 * Section
 */

export const Section = styled.section`
  padding: 16px;
`
