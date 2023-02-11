import { AppProps } from 'next/app'
import '../stylesheets/main.scss'
import LanguageContextProvider from '../components/Language/LanguageContextProvider'
import ThemeContextProvidor from '../components/Theme/ThemeContextProvidor'
import NavContextProvider from '../components/Navigation/NavContextProvider'

function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageContextProvider>
      <ThemeContextProvidor>
        <NavContextProvider>
          <Component {...pageProps} />
        </NavContextProvider>
      </ThemeContextProvidor>
    </LanguageContextProvider>
  )
}

export default App
