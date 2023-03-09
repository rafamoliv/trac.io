import { Section as StyledSection } from '../SystemPage.style'
import { Layout } from 'antd';
import { ChildrenProps } from '../types'

/**
 * Internal pages template section
 * 
 * @param {ReactNode} children
 */

export const Section = ({ children }: ChildrenProps) => {
  return <Layout.Content><StyledSection>{children}</StyledSection></Layout.Content>
}
