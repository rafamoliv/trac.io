import styled, { css } from 'styled-components'
import { pxToRem } from '@/utils'
import { Layout, Typography } from 'antd'

/**
 * Root
 */

export const Header = styled(Layout.Header)`
  ${({ theme }) => css`
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 ${theme.spacing[2]};
  `}

  @media (min-width: 576px) {
    flex-direction: row;
  }
`

export const MenuContent = styled.nav`
  display: flex;
  flex-direction: column;
  height: calc(100% - ${pxToRem(80)});
  justify-content: space-between;
`

export const MenuTop = styled.div``

export const Flags = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${theme.spacing[0.5]};
  `}
`

/**
 * Profile Image
 */

export const ProfileContent = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: ${theme.spacing[0.5]};
    padding: 0 ${theme.spacing[2]} 0 ${theme.spacing[2]};
  `}
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
  ${({ theme }) => css`
    height: ${theme.spacing[4]};
    margin: ${theme.spacing[2]};
    text-align: center;
  `}
`

/**
 * Section
 */

export const Section = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacing[2]};
  `}
`
