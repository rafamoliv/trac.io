/* eslint-disable no-unused-vars */
import { ReactNode } from 'react'

interface AppChildrenProps {
  children: ReactNode
}

export interface AppContextProps extends AppChildrenProps {
  handleSignIn: (email: string) => void
  handleSignOut: () => void
  user: StateProps | null
}

export type AppProviderProps = AppChildrenProps

export interface StateProps {
  avatar: null | string
  name: null | string
  email: null | string
}
