/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { ReactNode } from 'react'

export interface ChildrenProps {
  children: ReactNode
}

export interface HeaderProps extends ChildrenProps {
  title?: string
}
