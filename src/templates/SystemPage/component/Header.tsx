import { HeaderProps } from '../types'
import { Typography } from 'antd';
import { Header as StyledHeader } from '../SystemPage.style';

/**
 * Internal pages template header
 * 
 * @param {ReactNode} children
 * @param {string} title
 */

export const Header = ({ children, title }: HeaderProps) => {
  return <StyledHeader>
    <Typography.Title style={{ margin: 0 }}>{title}</Typography.Title>
    {children}
  </StyledHeader>
}
