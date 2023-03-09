import { ConfigProvider, theme } from 'antd'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import '@/locales/i18n'

import Store from '@/store'
import { MyThemeProvider } from '@/styles'

import Routes from './routes'
import { AppContextProvider } from './context/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider
    theme={{
      algorithm: theme.compactAlgorithm,
    }}
  >
    <Provider store={Store}>
      <AppContextProvider>
        <MyThemeProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </MyThemeProvider>
      </AppContextProvider>
    </Provider>
  </ConfigProvider>
)
