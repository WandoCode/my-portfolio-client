import { AppProps } from 'next/app'
import '../stylesheets/main.scss'
import LanguageContextProvider from '../components/Language/LanguageContextProvider'
import ThemeContextProvidor from '../components/Theme/ThemeContextProvidor'
import NavContextProvider from '../components/Navigation/NavContextProvider'
import formStore from '../stores/formStore.redux'
import { Provider } from 'react-redux'

function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageContextProvider>
      <ThemeContextProvidor>
        <NavContextProvider>
          <Provider store={formStore}>
            <Component {...pageProps} />
          </Provider>
        </NavContextProvider>
      </ThemeContextProvidor>
    </LanguageContextProvider>
  )
}

export default App
