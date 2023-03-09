import { useState, createContext } from 'react'

import config from './AppContext.config'
import { AppContextProps, AppProviderProps, StateProps } from './types'

export const AppContext = createContext<Partial<AppContextProps>>({})

export const AppContextProvider = (props: AppProviderProps) => {
  const [user, setUser] = useState<StateProps | null>(null)

  const handleSignIn = (email: string) => {
    try {
      setUser({
        avatar: config.schedule.avatar,
        name: config.schedule.name,
        email
      })
    } catch (error) {
      console.warn(error)
    }
  }

  const handleSignOut = () => {
    try {
      setUser(null)
    } catch (error) {
      console.warn(error)
    }
  }

  return (
    <AppContext.Provider
      value={{ user, handleSignIn, handleSignOut }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
