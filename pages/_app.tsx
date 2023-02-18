import { AppProps } from 'next/app'
import '../stylesheets/main.scss'

import ThemeContextProvidor from '../components/Features/Theme/ThemeContextProvidor'
import { Provider } from 'react-redux'
import store from '../components/Features/app.store'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvidor>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeContextProvidor>
  )
}

export default App
