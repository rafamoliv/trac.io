import { Key } from 'react'

export interface assetsDataProps {
  id: Key
  image: string
  name: string
  status: string
  healthscore: number
  model: string
  timestamp: Date
  specifications: {
    maxTemp: number
    power: number
    rpm: number
  }
}

interface utilProps {
  text: string
  color: string
}

export interface assetsUtilProps {
  inAlert: utilProps
  inOperation: utilProps
  inDowntime: utilProps
  unplannedStop: utilProps
  plannedStop: utilProps
}
