import { Card as CardAntd } from 'antd';
import { ReactNode } from 'react';

/**
 * Card component
 */

interface CardProps {
  bordered?: boolean
  children: ReactNode
  cover: ReactNode
  hoverable?: boolean
  title?: string
}

export const Card = ({ bordered = true, children, cover, hoverable, title }: CardProps) => {
  return <CardAntd title={title} bordered={bordered} cover={cover} hoverable={hoverable}>{children}</CardAntd>
}
