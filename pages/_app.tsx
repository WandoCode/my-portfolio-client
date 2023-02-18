import { AppProps } from 'next/app'
import '../stylesheets/main.scss'
import { Provider } from 'react-redux'
import store from '../Features/app.store'
import { Analytics } from '@vercel/analytics/react'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Analytics />
    </Provider>
  )
}

export default App
