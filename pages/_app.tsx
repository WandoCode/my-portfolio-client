import { AppProps } from 'next/app'
import '../stylesheets/main.scss'
import GlobalContextProvider from '../contexts/GlobalContextProvider'

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  )
}

export default App
