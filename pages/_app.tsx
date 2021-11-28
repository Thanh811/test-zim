import '../styles/globals.css'
import { Fragment, useEffect } from 'react'
import Head from 'next/head'

import type { AppProps } from 'next/app'
import { Router } from 'next/dist/client/router'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>

    <Head>
    <title>Covid19</title>
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
  </Head>
 
    <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
