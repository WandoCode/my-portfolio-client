import { AppProps } from 'next/app'
import '../stylesheets/main.scss'

import ThemeContextProvidor from '../components/Features/Theme/ThemeContextProvidor'
import NavContextProvider from '../components/Features/Navigation/NavContextProvider'
import { Provider } from 'react-redux'
import store from '../components/Features/app.store'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvidor>
      <NavContextProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </NavContextProvider>
    </ThemeContextProvidor>
  )
}

export default App
