import { ChildrenProps } from "./types"

/**
 * External pages template root
 * 
 * @param {ReactNode} children
 */


const AuthPage = ({ children }: ChildrenProps) => {

  return (
    <div>
      {children}
    </div>
  )
}

export default AuthPage
