import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {

    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" type="image/png" href="/favicon.ico" />
          <link rel="icon" href="/logos/logo-144x144.png" />
        </Head>
        <body className="scrollbar scrollbar-thumb-indigo-700 scrollbar-track-purple-200 overflow-x-hidden overflow-y-auto scrollbar-hide md:scrollbar-default">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
