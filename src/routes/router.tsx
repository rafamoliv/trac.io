import { useEffect, useContext, lazy, Suspense, ReactElement } from 'react'
import { Navigate, Outlet, useNavigate, useRoutes } from 'react-router-dom'

import { privateURL, publicURL } from './urls'
import { AppContext } from '@/context/AppContext'
import { Loading } from '@/components'

interface ProtectedRouteProps {
  user: string[] | unknown
}

// pages
const SignIn = lazy(() => import('@/pages/SignIn'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Settings = lazy(() => import('@/pages/Settings'))
const Assets = lazy(() => import('@/pages/Assets'))
const Workorders = lazy(() => import('@/pages/Workorders'))
const Companies = lazy(() => import('@/pages/Companies'))
const Users = lazy(() => import('@/pages/Users'))

const ProtectedRoute = ({ user }: ProtectedRouteProps): ReactElement => {
  if (user) {
    return <Outlet />
  }

  return <Navigate to={publicURL.SIGNIN} />
}

const Router = () => {
  const { user } = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate(publicURL.SIGNIN)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  let routes = useRoutes([
    {
      element: <ProtectedRoute user={user} />,
      children: [
        {
          path: privateURL.DASHBOARD,
          element: <Suspense fallback={<Loading size='md' />}><Dashboard /></Suspense>
        },
        {
          path: privateURL.SETTINGS,
          element: <Suspense fallback={<Loading size='md' />}><Settings /></Suspense>
        },
        {
          path: privateURL.ASSETS,
          element: <Suspense fallback={<Loading size='md' />}><Assets /></Suspense>
        },
        {
          path: privateURL.WORKORDERS,
          element: <Suspense fallback={<Loading size='md' />}><Workorders /></Suspense>
        },
        {
          path: privateURL.COMPANIES,
          element: <Suspense fallback={<Loading size='md' />}><Companies /></Suspense>
        },
        {
          path: privateURL.USERS,
          element: <Suspense fallback={<Loading size='md' />}><Users /></Suspense>
        },
        {
          path: '*',
          element: <Navigate to={privateURL.DASHBOARD} />
        }
      ]
    },
    {
      path: publicURL.SIGNIN,
      element: <Suspense fallback={<Loading size='md' />}><SignIn /></Suspense>
    },
    {
      path: '*',
      element: <Navigate to={publicURL.SIGNIN} />
    }
  ])

  return routes
}

export default Router
