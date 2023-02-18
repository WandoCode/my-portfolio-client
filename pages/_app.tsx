import { AppProps } from 'next/app'
import '../stylesheets/main.scss'
import LanguageContextProvider from '../components/Features/Language/LanguageContextProvider'
import ThemeContextProvidor from '../components/Features/Theme/ThemeContextProvidor'
import NavContextProvider from '../components/Features/Navigation/NavContextProvider'
import formStore from '../components/Features/Form/form.store'
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
