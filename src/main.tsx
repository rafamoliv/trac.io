import { Suspense } from 'react'
import { ConfigProvider, theme } from 'antd'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import '@/locales/i18n'

import Store from '@/store'
import { MyThemeProvider } from '@/styles'

import Routes from './routes'
import { Loading } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <ConfigProvider
      theme={{
        algorithm: theme.compactAlgorithm,
      }}
    >
      <MyThemeProvider>
        <BrowserRouter>
          <Suspense fallback={<Loading size='bg' />}>
            <Routes />
          </Suspense>
        </BrowserRouter>
      </MyThemeProvider>
    </ConfigProvider>
  </Provider>
)
