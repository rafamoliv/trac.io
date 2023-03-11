import { Key } from 'react'

export interface assetsDataProps {
  id: Key
  image: string
  name: string
  status: string
  healthscore: number
  model: string
  specifications: {
    maxTemp: number
    power: number
    rpm: number
  }
}
