import { AppProps } from 'next/app'
import '../stylesheets/main.scss'
import { Provider } from 'react-redux'
import store from '../Features/app.store'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default App
