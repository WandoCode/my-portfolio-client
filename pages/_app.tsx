import { AppProps } from 'next/app'
import '../stylesheets/main.scss'
import LanguageContextProvider from '../components/Language/LanguageContextProvider'
import ThemeContextProvidor from '../components/Theme/ThemeContextProvidor'

function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageContextProvider>
      <ThemeContextProvidor>
        <Component {...pageProps} />
      </ThemeContextProvidor>
    </LanguageContextProvider>
  )
}

export default App
