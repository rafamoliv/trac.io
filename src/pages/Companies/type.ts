import { Key } from 'react'

export interface companiesProps {
  id: Key
  name: string
}

export interface unitsProps extends companiesProps {
  companyId: Key
}
