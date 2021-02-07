import React from 'react'

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/> 
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
          <title>Planet App</title>
          <link rel="icon" href="/favicon.ico" />
          {/* https://stackoverflow.com/questions/65044736/mixed-content-error-on-react-project-using-swapi-star-wars-api */}
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument