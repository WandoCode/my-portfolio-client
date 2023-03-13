import { AppProps } from 'next/app'
import '../stylesheets/main.scss'
import { Provider } from 'react-redux'
import store from '../Features/app.store'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
