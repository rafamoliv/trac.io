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

/**
 * Logo Image
 */

export const Figure = styled.figure`
  height: 32px;
  margin: 16px;
  text-align: center;
`

export const Image = styled.img`
  height: 32px;
  max-width: 100%;
`

/**
 * Section
 */

export const Section = styled.section`
  padding: 16px;
`
