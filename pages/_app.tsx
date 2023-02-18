import { AppProps } from 'next/app'
import '../stylesheets/main.scss'
import LanguageContextProvider from '../components/Language/LanguageContextProvider'
import ThemeContextProvidor from '../components/Theme/ThemeContextProvidor'
import NavContextProvider from '../components/Navigation/NavContextProvider'
import { Provider } from 'react-redux'
import store from '../stores/redux'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LanguageContextProvider>
        <ThemeContextProvidor>
          <NavContextProvider>
            <Component {...pageProps} />
          </NavContextProvider>
        </ThemeContextProvidor>
      </LanguageContextProvider>
    </Provider>
  )
}

export default App
