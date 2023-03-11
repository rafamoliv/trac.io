import i18next from 'i18next'
import { useEffect, useContext, lazy, Suspense } from 'react'
import { Navigate, Outlet, useNavigate, useRoutes } from 'react-router-dom'

import { privateURL, publicURL } from './urls'
import { AppContext } from '@/context/AppContext'
import { Loading } from '@/components'

// pages
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Settings = lazy(() => import('@/pages/Settings'))
const Assets = lazy(() => import('@/pages/Assets'))
const Workorders = lazy(() => import('@/pages/Workorders'))
const Companies = lazy(() => import('@/pages/Companies'))
const Users = lazy(() => import('@/pages/Users'))

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ user }) => {
  if (user) {
    return <Outlet />
  }

  return <Navigate to={publicURL.SIGNIN} />
}

// eslint-disable-next-line react/prop-types
const Signin = ({ onClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <h3>{i18next.t('globalText:sign') as string}</h3>
      <button onClick={onClick}>
        {i18next.t('globalText:sign', { context: 'btn' }) as string}
      </button>
    </div>
  )
}

const Router = () => {
  const { user, handleSignIn } = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    //if (!user) navigate(publicURL.SIGNIN)
    if (user) navigate(privateURL.DASHBOARD)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  let routes = useRoutes([
    {
      element: <ProtectedRoute user={'user'} />,
      children: [
        {
          path: privateURL.DASHBOARD,
          element: <Suspense fallback={<Loading size='bg' />}><Dashboard /></Suspense>
        },
        {
          path: privateURL.SETTINGS,
          element: <Suspense fallback={<Loading size='bg' />}><Settings /></Suspense>
        },
        {
          path: privateURL.ASSETS,
          element: <Suspense fallback={<Loading size='bg' />}><Assets /></Suspense>
        },
        {
          path: privateURL.WORKORDERS,
          element: <Suspense fallback={<Loading size='bg' />}><Workorders /></Suspense>
        },
        {
          path: privateURL.COMPANIES,
          element: <Suspense fallback={<Loading size='bg' />}><Companies /></Suspense>
        },
        {
          path: privateURL.USERS,
          element: <Suspense fallback={<Loading size='bg' />}><Users /></Suspense>
        },
        {
          path: '*',
          element: <Navigate to={privateURL.DASHBOARD} />
        }
      ]
    },
    {
      path: publicURL.SIGNIN,
      element: <Suspense fallback={<Loading size='bg' />}><Signin onClick={() => handleSignIn('teste@uhas.com')} /></Suspense>
    },
    {
      path: '*',
      element: <Navigate to={publicURL.SIGNIN} />
    }
  ])

  return routes
}

export default Router
