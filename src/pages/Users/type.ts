import { Breakpoint } from 'antd'
import { Key, ReactNode } from 'react'

export interface tableUsersDataType {
  key: Key
  avatar: ReactNode
  name: string
  email: string
  nickname: string
  responsive?: Breakpoint[]
}
