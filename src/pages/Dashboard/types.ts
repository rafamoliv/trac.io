import { Breakpoint } from 'antd'
import { Key, ReactNode } from 'react'

export interface tableRecentEmailsDataType {
  key: Key
  image: ReactNode
  company: string
  subject: string
  date: Date | string
  responsive?: Breakpoint[]
}

export interface chartProps {
  data: []
}

export interface chartRadialDataProps extends chartProps {
  name: string
  specifications: {
    maxTemp: string
  }
}

export interface chartColumnDataProps extends chartProps {
  name: string
  healthscore: string
}
