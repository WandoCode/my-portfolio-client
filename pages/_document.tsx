import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Portfolio of Maxime Chirez, Frontend Developer. Discover his projects and contact him!"
        ></meta>
        <meta name="color-scheme" content="light dark" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        {/* Allow to avoid a flash on screen between light and dark theme at page loading.
        The theme is loaded from localstorage before the page. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function theme() {
                          let currentTheme

                          currentTheme = localStorage.getItem('theme')

                          if (!currentTheme){
                            currentTheme =  'light'
                            currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                              ? 'dark'
                              : 'light'
                            }
                            
                            document.body.id = currentTheme
                            console.log(document.body.id)
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
