import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </Head>
      <body>
        {/* Allow to avoid a flash on screen between light and dark theme at page loading.
        The theme is loaded from localstorage before the page. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function theme() {
                          let currentTheme

                          currentTheme = localStorage.getItem('theme')

                          if (!currentTheme)
                            currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                              ? 'dark'
                              : 'light'

                          document.body.id = currentTheme
                        })()

                    `,
          }}
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
